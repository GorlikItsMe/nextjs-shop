import { Prisma, Product } from "@prisma/client";
import prisma from "../lib/prisma";

export interface CartProduct {
  id: number;
  name: string;
  desc: string;
  imageLink: string;
  price: number;
  amount: number;
  categoryId: number;
  categoryName: String;
}

export interface ShopApiProduct {
  id: number;
  name: string;
  desc: string;
  imageLink: string;
  price: number;
}

export async function getProductById(
  productId: number
): Promise<ShopApiProduct> {
  const productObj = await prisma.product.findFirst({
    where: {
      id: productId,
      published: true,
      stockAmount: {
        not: 0,
      },
    },
    select: {
      id: true,
      name: true,
      desc: true,
      imageLink: true,
      price: true,
    },
  });

  // dumb fix, json dont like decimal
  let pObj: ShopApiProduct = productObj as unknown as ShopApiProduct;
  pObj.price = parseFloat(productObj.price as unknown as string);
  return pObj;
}

export async function getCart(cartId: number): Promise<CartProduct[]> {
  // todo jeżeli cart nie istnieje, dodaj nowy
  const cart = await prisma.order.findFirst({
    where: { id: cartId },
    include: {
      OrderProduct: {
        include: {
          Product: {
            include: { category: true },
          },
        },
      },
    },
  });

  let myCart: CartProduct[] = [];
  cart.OrderProduct.forEach((op) => {
    const p = op.Product;
    myCart.push({
      id: p.id,
      name: p.name,
      desc: p.desc,
      imageLink: p.imageLink,
      price: p.price as unknown as number,
      amount: op.amount,
      categoryId: p.categoryId,
      categoryName: p.category.name,
    });
  });
  return myCart;
}

export async function addProductToCart(
  cartId: number,
  productId: number,
  amount: number
) {
  // czy produkt istneije w koszyku?
  const opExist = await prisma.orderProduct.findFirst({
    where: {
      orderId: cartId,
      productId: productId,
    },
  });
  if (opExist) {
    // istnieje to dopisz do wpisu
    await prisma.orderProduct.update({
      where: { id: opExist.id },
      data: {
        amount: opExist.amount + amount,
      },
    });
  } else {
    // nie ma to dodaj nowy
    await prisma.orderProduct.create({
      data: {
        orderId: cartId,
        productId: productId,
        amount: amount,
      },
    });
  }
}

export async function removeProductFromCart(
  cartId: number,
  productId: number,
  amount: number
) {
  // czy produkt istneije w koszyku?
  const opExist = await prisma.orderProduct.findFirst({
    where: {
      orderId: cartId,
      productId: productId,
    },
  });
  if (opExist) {
    // istnieje to usuń z wpisu
    if (opExist.amount <= amount) {
      // usun cały wpis bo chcesz usunąć wszystkie produkty (albo nawet więcej)
      await prisma.orderProduct.delete({ where: { id: opExist.id } });
      return;
    }

    await prisma.orderProduct.update({
      where: { id: opExist.id },
      data: {
        amount: opExist.amount - amount,
      },
    });
    return;
  }
  // produktu nie ma to nic nie rób
}

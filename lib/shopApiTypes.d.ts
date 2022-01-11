import { Category, Product } from "@prisma/client";

type ApiCategory = {
  id: number;
  name: string;
  _count: {
    Product: number;
  };
}[];

type ApiCategoryDetail = Category & {
  Product: {
    desc: string;
    id: number;
    name: string;
    price: Decimal;
    imageLink: string;
  }[];
};

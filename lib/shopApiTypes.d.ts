import { Category, Product } from "@prisma/client";



type ApiCategoryDetail = Category & {
    Product: {
      desc: string;
      id: number;
      name: string;
      price: Decimal;
    }[];
  };


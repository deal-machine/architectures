import { Product } from "../entities/product.ts";

export type IncreaseValueParams = {
  products: Product[];
  value: number;
};

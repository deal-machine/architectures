import { IncreaseValueParams } from "./product-service-protocol.ts";

export class ProductService {
  static increaseValue({ products, value }: IncreaseValueParams): void {
    products.forEach((product) => product.increaseValue(value));
  }
}

import { describe, expect, it } from "bun:test";
import { Product } from "../entities/product.ts";
import { ProductService } from "./product-service.ts";

describe("Product Service", () => {
  describe("increaseValue", () => {
    it("should increase value of all products", () => {
      const productOne = new Product({
        id: "id",
        name: "name",
        category: "category",
        description: "description",
        price: 1,
      });
      const productTwo = new Product({
        id: "id",
        name: "name",
        category: "category",
        description: "description",
        price: 2,
      });
      const products = [productOne, productTwo];
      ProductService.increaseValue({ products, value: 10 });

      expect(productOne.price).toBe(11);
      expect(productTwo.price).toBe(12);
    });
  });
});

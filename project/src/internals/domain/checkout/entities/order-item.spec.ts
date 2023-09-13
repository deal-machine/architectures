import { Product } from "@domain/product/entities/product.ts";
import { beforeAll, describe, expect, it } from "bun:test";
import { OrderItem } from "./order-item.ts";
import { AttributeException } from "@shared/errors/attribute.error.ts";
import { DomainException } from "@shared/errors/domain.error.ts";

let product: Product;

describe("OrderItem Entity", () => {
  beforeAll(() => {
    product = new Product({
      id: "product-id",
      name: "product-name",
      description: "product-description",
      category: "product-category",
      price: 5,
    });
  });
  describe("constructor validate", () => {
    it("should throw AttributeException when id is empty", () => {
      try {
        new OrderItem({
          id: "",
          name: "Tester",
          price: 50,
          productId: product.id,
          quantity: 2,
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(AttributeException);
        expect(error.message).toBe("id is required");
        expect(error.name).toBe("AttributeException");
      }
    });
    it("should throw AttributeException when name is empty", () => {
      try {
        new OrderItem({
          id: "id-testing",
          name: "",
          price: 5,
          productId: product.id,
          quantity: 2,
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(AttributeException);
        expect(error.message).toBe("name is required");
        expect(error.name).toBe("AttributeException");
      }
    });
    it("should throw AttributeException when price is empty", () => {
      try {
        new OrderItem({
          id: "id-testing",
          name: "name-testing",
          price: 0,
          productId: product.id,
          quantity: 2,
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(AttributeException);
        expect(error.message).toBe("price is required");
        expect(error.name).toBe("AttributeException");
      }
    });
    it("should throw DomainException when productId is empty", () => {
      try {
        new OrderItem({
          id: "id-testing",
          name: "name-testing",
          price: 10,
          productId: "",
          quantity: 2,
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(DomainException);
        expect(error.message).toBe(
          "OrderItem must have relation with a product"
        );
        expect(error.name).toBe("DomainException");
      }
    });
    it("should throw DomainException when quantity is empty", () => {
      try {
        new OrderItem({
          id: "id-testing",
          name: "name-testing",
          price: 10,
          productId: "productId-test",
          quantity: 0,
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(DomainException);
        expect(error.message).toBe("Quantity must be greater than 0");
        expect(error.name).toBe("DomainException");
      }
    });
    it("should create new OrderItem correctly", () => {
      const orderItem = new OrderItem({
        id: "id-test",
        name: "name-test",
        price: 11,
        productId: product.id,
        quantity: 2,
      });
      expect(orderItem).toBeTruthy();
      expect(orderItem.id).toBe("id-test");
      expect(orderItem.name).toBe("name-test");
      expect(orderItem.price).toBe(11);
      expect(orderItem.productId).toBe(product.id);
      expect(orderItem.quantity).toBe(2);
      expect(orderItem.total()).toBe(22);
    });
  });
  describe("increaseValue", () => {
    it("should throw DomainException when value is less than 0", () => {
      const orderItem = new OrderItem({
        id: "id-tester",
        name: "tester",
        price: 50,
        productId: product.id,
        quantity: 2,
      });

      try {
        orderItem.increaseValue(0);
      } catch (err: any) {
        expect(err).toBeInstanceOf(DomainException);
        expect(err.message).toBe("value should be positive");
      }
    });
    it("should return total added value", () => {
      const orderItem = new OrderItem({
        id: "id-tester",
        name: "tester",
        price: 50,
        productId: product.id,
        quantity: 2,
      });
      expect(orderItem.total()).toBe(100);
      orderItem.increaseValue(50);
      expect(orderItem.total()).toBe(200);
    });
  });
});

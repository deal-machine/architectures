import { Customer } from "@domain/customer/entities/customer.ts";
import { describe, expect, it } from "bun:test";
import { OrderItem } from "../entities/order-item.ts";
import { OrderService } from "./order-service.ts";
import { DomainException } from "@shared/errors/domain.error.ts";
import { Product } from "@domain/product/entities/product.ts";
import { Order } from "../entities/order.ts";

describe("Order Service", () => {
  describe("placeOrder", () => {
    it("should increaseRewardPoints in customer and return a new order", () => {
      const customer = new Customer({
        id: "id",
        name: "name",
      });
      const orderItem = new OrderItem({
        id: "id",
        name: "name",
        productId: "productId",
        price: 50,
        quantity: 2,
      });

      const order = OrderService.placeOrder({
        customer,
        orderItems: [orderItem],
      });

      expect(order).toBeTruthy();
      expect(order.total).toBe(100);
      expect(customer.rewardPoints).toBe(50);
    });

    it("should throw when orderItems is an empty array", () => {
      const customer = new Customer({
        id: "id",
        name: "name",
      });

      try {
        OrderService.placeOrder({
          customer,
          orderItems: [],
        });
      } catch (error: any) {
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(DomainException);
        expect(error.message).toBe("Order must include at least one OrderItem");
        expect(error.name).toBe("DomainException");
      }
    });
  });
  describe("total", () => {
    it("should return total of order price", () => {
      //Arrange
      const customer = new Customer({
        id: "customer-id",
        name: "customer-name",
      });
      const product = new Product({
        id: "product-id",
        name: "product-name",
        category: "product-category",
        description: "product-description",
        price: 50,
      });
      const orderItem = new OrderItem({
        id: "1234",
        name: "Item example one",
        price: 12,
        productId: product.id,
        quantity: 2,
      });
      const orderItemTwo = new OrderItem({
        id: "122",
        name: "second item example",
        price: 1,
        productId: product.id,
        quantity: 6,
      });
      const orderItemThree = new OrderItem({
        id: "122",
        name: "second item example",
        price: 100,
        productId: product.id,
        quantity: 6,
      });
      const order = new Order({
        customerId: customer.id,
        id: "order-id-one",
        items: [orderItem, orderItemTwo],
      });
      const orderTwo = new Order({
        customerId: customer.id,
        id: "order-id-two",
        items: [orderItem],
      });
      const orderThree = new Order({
        customerId: customer.id,
        id: "order-id-three",
        items: [orderItemTwo],
      });
      const orderFour = new Order({
        customerId: customer.id,
        id: "order-id-three",
        items: [orderItemThree],
      });

      //Act
      const totalValue = OrderService.total({
        orders: [order, orderTwo, orderThree, orderFour],
      });

      // Assert
      expect(totalValue).toBeTruthy();
      expect(totalValue).toBe(660);
    });
  });
});

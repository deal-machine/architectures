import { describe, expect, it } from "bun:test";
import { OrderFactory } from "./order-factory.ts";

describe("Order Factory", () => {
  it("should create order", () => {
    const order = OrderFactory.create({
      customerId: "customer-id",
      items: [{ name: "name", price: 20, productId: "12", quantity: 2 }],
    });
    expect(order).toBeTruthy();
  });
});

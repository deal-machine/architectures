import { Customer } from "@domain/customer/entities/customer.ts";
import { OrderItem } from "../entities/order-item.ts";
import { Order } from "../entities/order.ts";

export type PlaceOrderParams = {
  customer: Customer;
  orderItems: OrderItem[];
};

export type TotalParams = {
  orders: Order[];
};

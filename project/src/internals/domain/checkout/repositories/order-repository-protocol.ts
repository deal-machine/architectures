import { RepositoryInterface } from "@shared/repositories/repository-protocol.ts";
import { Order } from "../entities/order.ts";

export interface OrderRepository extends RepositoryInterface<Order> {}

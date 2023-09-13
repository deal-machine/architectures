import { SequelizeOptions } from "sequelize-typescript";
import {
  initSequelize,
  closeDatabase,
  getInstance,
} from "./sequelize-instance.ts";
import { connection } from "../../../databases/connections.ts";
import { CustomerModel } from "../customer/customer-model.ts";
import { ProductModel } from "../product/product-model.ts";
import { OrderModel } from "../checkout/order-model.ts";
import { OrderItemModel } from "../checkout/order-item-model.ts";

const initDatabase = () => initSequelize(connection as SequelizeOptions);

const sequelizeModels = [
  CustomerModel,
  ProductModel,
  OrderModel,
  OrderItemModel,
];

export { initDatabase, closeDatabase, getInstance, sequelizeModels };

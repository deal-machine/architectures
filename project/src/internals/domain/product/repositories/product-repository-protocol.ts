import { RepositoryInterface } from "@shared/repositories/repository-protocol.ts";
import { Product } from "../entities/product.ts";

export interface ProductRepository extends RepositoryInterface<Product> {
  findAllByCategory(category: string): Promise<Product[]>;
}

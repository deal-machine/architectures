import { RepositoryInterface } from "@shared/repositories/repository-protocol.ts";
import { Customer } from "../entities/customer.ts";

export interface CustomerRepository extends RepositoryInterface<Customer> {}

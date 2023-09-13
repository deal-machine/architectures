import { Customer } from "@domain/customer/entities/customer.ts";
import { IdentifierGeneratorAdapter } from "@ports/identifier-generator-protocol.ts";
import { EventProvider } from "@shared/events/event-provider-protocol.ts";

interface CreateCustomerServiceConstructor {
  event: EventProvider<Customer>;
  uuid: IdentifierGeneratorAdapter;
}

export class CreateCustomerService {
  private event: EventProvider<Customer>;
  private uuid: IdentifierGeneratorAdapter;

  constructor({ event, uuid }: CreateCustomerServiceConstructor) {
    this.event = event;
    this.event = event;
    this.uuid = uuid;
  }

  execute(name: string): Customer {
    const customer = new Customer({
      id: this.uuid.generate(),
      name,
    });

    this.event.dispatch(customer);

    return customer;
  }
}

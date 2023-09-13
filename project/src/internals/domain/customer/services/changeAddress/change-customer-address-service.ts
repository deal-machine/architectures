import { Customer } from "@domain/customer/entities/customer.ts";
import { Address } from "@domain/customer/value-objects/address/address.ts";
import { DomainException } from "@shared/errors/domain.error.ts";
import { EventProvider } from "@shared/events/event-provider-protocol.ts";

interface AddressType {
  city: string;
  country: string;
  number: string;
  street: string;
  zipcode: string;
  [key: string]: any; // index signature
}

export class ChangeCustomerAddressService {
  private event: EventProvider<Customer>;

  constructor({ event }: { event: EventProvider<Customer> }) {
    this.event = event;
  }

  execute(customer: Customer, address: AddressType): void {
    const requiredFields = ["city", "country", "number", "street", "zipcode"];
    requiredFields.forEach((field) => {
      if (!address[field]) {
        throw new DomainException(`${field} is required to change Address`);
      }
    });

    const addressEntity = new Address({
      city: address.city,
      country: address.country,
      number: address.number,
      street: address.street,
      zipcode: address.zipcode,
    });

    customer.changeAddress(addressEntity);

    this.event.dispatch(customer);
  }
}

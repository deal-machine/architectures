import { EventProvider } from "@shared/events/event-provider-protocol.ts";
import { ChangeCustomerAddressService } from "./change-customer-address-service.ts";
import { describe, expect, it, spyOn } from "bun:test";
import { Customer } from "@domain/customer/entities/customer.ts";
import { DomainException } from "@shared/errors/domain.error.ts";
import { Address } from "@domain/customer/value-objects/address/address.ts";

interface SutInterface {
  sut: ChangeCustomerAddressService;
  eventStub: EventProvider<any>;
}

const makeEventStub = (): EventProvider<any> => {
  class EventProviderStub implements EventProvider<any> {
    dispatch(_value: any): void {
      console.log("");
    }
  }

  return new EventProviderStub();
};
const makeSut = (): SutInterface => {
  const eventStub = makeEventStub();
  const sut = new ChangeCustomerAddressService({
    event: eventStub,
  });
  return {
    sut,
    eventStub,
  };
};
describe("Change Customer Address Service", () => {
  it("should throw DomainException when address is empty", () => {
    const { sut } = makeSut();
    const customer = new Customer({ id: "1", name: "customer name" });
    const address = {
      country: "address.country",
      number: "address.number",
      street: "address.street",
      zipcode: "address.zipcode",
    } as Address;
    try {
      sut.execute(customer, address);
    } catch (error: any) {
      expect(error).toBeTruthy();
      expect(error).toBeInstanceOf(DomainException);
      expect(error.message).toBe("city is required to change Address");
    }
  });
  it("should call changeAddress and notify event", () => {
    const { sut, eventStub } = makeSut();
    const dispatchSpy = spyOn(eventStub, "dispatch");

    const customer = new Customer({ id: "1", name: "customer name" });
    const address = {
      country: "address.country",
      number: "address.number",
      street: "address.street",
      zipcode: "address.zipcode",
      city: "address.city",
    };

    sut.execute(customer, address);

    expect(dispatchSpy).toHaveBeenCalled();
  });
});

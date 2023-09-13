import { EventProvider } from "@shared/events/event-provider-protocol.ts";
import { CreateCustomerService } from "./create-customer-service.ts";
import { IdentifierGeneratorAdapter } from "@ports/identifier-generator-protocol.ts";
import { describe, expect, it, jest, spyOn } from "bun:test";
import { Customer } from "@domain/customer/entities/customer.ts";

interface SutInterface {
  sut: CreateCustomerService;
  eventStub: EventProvider<any>;
  uuidStub: IdentifierGeneratorAdapter;
}

const makeUuidStub = (): IdentifierGeneratorAdapter => {
  const uuidStub: IdentifierGeneratorAdapter = {
    generate: jest.fn().mockReturnValue("id-generated"),
  };
  return uuidStub;
};
const makeEventStub = (): EventProvider<any> => {
  const eventStub: EventProvider<any> = {
    dispatch: jest.fn(),
  };
  return eventStub;
};
const makeSut = (): SutInterface => {
  const eventStub = makeEventStub();
  const uuidStub = makeUuidStub();
  const sut = new CreateCustomerService({
    event: eventStub,
    uuid: uuidStub,
  });
  return {
    sut,
    eventStub,
    uuidStub,
  };
};

describe("Create Customer Service", () => {
  it("should return a Customer entity", () => {
    const { sut } = makeSut();

    const customer = sut.execute("Douglas");

    expect(customer).toBeInstanceOf(Customer);
  });
  it("should call uuid.generate and notify event", () => {
    const { sut, eventStub, uuidStub } = makeSut();
    const dispatchSpy = spyOn(eventStub, "dispatch");
    const generateSpy = spyOn(uuidStub, "generate");

    const customer = sut.execute("Douglas");

    expect(dispatchSpy).toHaveBeenCalled();
    expect(generateSpy).toHaveBeenCalled();
    expect(customer).toBeTruthy();
  });
});

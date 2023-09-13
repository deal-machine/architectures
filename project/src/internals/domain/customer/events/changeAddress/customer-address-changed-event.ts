import { Address } from "@domain/customer/value-objects/address/address.ts";
import { EventInterface } from "@shared/events/event-protocol.ts";

interface EventData {
  id: string;
  name: string;
  address: Address;
}
export class CustomerAddressChangedEvent implements EventInterface {
  dateTimeOcurred: Date;
  eventData: EventData;
  name: string;

  constructor(eventData: EventData) {
    this.eventData = eventData;
    this.dateTimeOcurred = new Date();
    this.name = "CustomerAddressChangedEvent";
  }
}

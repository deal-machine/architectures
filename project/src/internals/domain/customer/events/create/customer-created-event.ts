import { EventInterface } from "@shared/events/event-protocol.ts";

export class CustomerCreatedEvent implements EventInterface {
  dateTimeOcurred: Date;
  eventData: any;
  name: string;

  constructor(eventData: any) {
    this.eventData = eventData;
    this.dateTimeOcurred = new Date();
    this.name = "CustomerCreatedEvent";
  }
}

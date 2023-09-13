import { EventHandlerInterface } from "@shared/events/event-handler-protocol.ts";
import { CustomerCreatedEvent } from "../customer-created-event.ts";

export class SendLogHandler2
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`Esse é o segundo console.log do evento: ${event.eventData}`);
  }
}

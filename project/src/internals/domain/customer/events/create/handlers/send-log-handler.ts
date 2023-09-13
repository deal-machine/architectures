import { EventHandlerInterface } from "@shared/events/event-handler-protocol.ts";
import { CustomerCreatedEvent } from "../customer-created-event.ts";

export class SendLogHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`Esse é o primeiro console.log do evento: ${event.eventData}`);
  }
}

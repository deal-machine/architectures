import { EventHandlerInterface } from "@shared/events/event-handler-protocol.ts";
import { ProductCreatedEvent } from "../product-created-event.ts";

export class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    if (event.eventData.email) {
      console.log("... Sending email to: ", event.eventData.email, "\n");
    }
  }
}

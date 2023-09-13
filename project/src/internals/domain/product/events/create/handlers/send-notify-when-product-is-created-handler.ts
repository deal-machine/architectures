import { EventHandlerInterface } from "@shared/events/event-handler-protocol.ts";
import { ProductCreatedEvent } from "../product-created-event.ts";

export class SendNotifyWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    if (event.eventData.cellphone) {
      console.log(
        "... Sending notification to: ",
        event.eventData.cellphone,
        "\n"
      );
    }
  }
}

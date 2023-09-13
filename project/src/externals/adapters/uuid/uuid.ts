import { IdentifierGeneratorAdapter } from "@ports/identifier-generator-protocol.ts";
import { v4 } from "uuid";

export class Uuid implements IdentifierGeneratorAdapter {
  generate(): string {
    return v4();
  }
}

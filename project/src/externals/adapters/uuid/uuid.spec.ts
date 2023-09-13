import { beforeAll, describe, expect, it } from "bun:test";
import { Uuid } from "./uuid.ts";
import { IdentifierGeneratorAdapter } from "@ports/identifier-generator-protocol.ts";

let adapter: IdentifierGeneratorAdapter;

describe("uuid Adapter", () => {
  beforeAll(() => {
    adapter = new Uuid();
  });

  describe("generate", () => {
    it("should generate a unique identifier", () => {
      const id = adapter.generate();
      expect(id).toBeTruthy();
      expect(typeof id).toBe("string");

      const idTwo = adapter.generate();
      expect(idTwo).toBeTruthy();
      expect(typeof idTwo).toBe("string");

      expect(id).not.toEqual(idTwo);
      expect(id == idTwo).toBeFalsy();
    });
  });
});

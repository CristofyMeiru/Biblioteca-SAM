import { get_env } from "@/shared/utils/get_env";
import { describe, expect, it } from "vitest";

describe("Bring a env", () => {
  it("Return a env", () => {

    const SECRET = get_env("SECRET")
    
    expect(SECRET).toBeDefined();
    expect(SECRET).not.toBeInstanceOf(Error)
  });
});

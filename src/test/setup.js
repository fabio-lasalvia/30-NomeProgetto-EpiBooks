import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

//i matchers ci permettono di rilevare gli elementi dal dom
expect.extend(matchers);


//se serve solo cleanup si può fare: afterEach(cleanup)
afterEach(() => {
  cleanup();
});

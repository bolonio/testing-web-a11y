import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

expect.extend(toHaveNoViolations);

it("should demonstrate this matcher`s usage with react", async () => {
  const html = ReactDOMServer.renderToString(<App />);
  const results = await axe(html);
  expect(results).toHaveNoViolations();
});

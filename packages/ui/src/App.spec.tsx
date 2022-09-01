import { App } from "./App";
import { render } from "@testing-library/react";

describe(App.name, () => {
  it("should render without blowing up", () => {
    const r = render(<App />);
    r.getByText("Connect Wallet");
  });
});

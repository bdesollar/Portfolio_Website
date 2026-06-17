import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders portfolio home headline", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /Technical Sales/i }),
  ).toBeInTheDocument();
});

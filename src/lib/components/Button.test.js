import { render } from "@testing-library/svelte";
import Button from "./Button";

test("shows slot content", () => {
  const { getByText } = render(svelte`<Button>Hello World!</Button>`);

  expect(getByText("Hello World!")).toBeInTheDocument();
});

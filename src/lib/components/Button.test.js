import { render, fireEvent } from "@testing-library/svelte";
import Button from "./Button";

test("shows slot content", () => {
  const { getByText } = render(svelte`<Button>Hello World!</Button>`);

  expect(getByText("Hello World!")).toBeInTheDocument();
});

test("handles clicks", async () => {
  const handler = jest.fn();
  const { getByText } = render(svelte`<Button on:click={handler}>Hello World!</Button>`);

  await fireEvent.click(getByText("Hello World!"));

  expect(handler.mock.calls.length).toBe(1);
});

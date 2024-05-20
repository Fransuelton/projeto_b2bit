import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("should render correctly with given text", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply the given className", () => {
    render(<Button text="Click Me" className="custom-class" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  it("should have the default type 'button'", () => {
    render(<Button text="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveAttribute("type", "button");
  });

  it("should use the provided type attribute", () => {
    render(<Button text="Submit" type="submit" />);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should pass additional props to the button element", () => {
    render(
      <Button
        text="Click Me"
        aria-label="custom-label"
        data-testid="custom-id"
      />
    );
    const button = screen.getByText("Click Me");
    expect(button).toHaveAttribute("aria-label", "custom-label");
    expect(button).toHaveAttribute("data-testid", "custom-id");
  });
});

import PrimaryButton from ".";
import { render, screen } from "@testing-library/react";

describe("PrimaryButton", () => {
  const handleClick = () => {};
  const props = { label: "Confirm", handleClick };

  it("renders Confirm when not loading", () => {
    render(<PrimaryButton {...props} isLoading={false} />);

    expect(screen.getByText("Confirm")).toBeTruthy();
  });

  it("renders Spinner when loading", () => {
    const { container } = render(<PrimaryButton {...props} isLoading={true} />);

    expect(container.firstChild?.firstChild).toHaveClass("spinner");
  });
});

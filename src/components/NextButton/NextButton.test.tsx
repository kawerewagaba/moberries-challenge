import NextButton from ".";
import { render, screen } from "@testing-library/react";

describe("NextButton", () => {
  render(<NextButton label="Next" />);

  it("renders Next", () => {
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});

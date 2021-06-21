import Switch from ".";
import { render, screen } from "@testing-library/react";

describe("Switch", () => {
  const props = {
    updateSelected: () => {},
  };

  it("renders button to the left and lights red when off", () => {
    render(<Switch {...props} selected={false} />);

    expect(screen.getByTestId("switch")).toHaveClass("off");
    expect(screen.getByTestId("button")).toHaveClass("buttonOff");
  });

  it("renders button to the right and lights green when on", () => {
    render(<Switch {...props} selected={true} />);

    expect(screen.getByTestId("switch")).toHaveClass("on");
    expect(screen.getByTestId("button")).toHaveClass("buttonOn");
  });
});

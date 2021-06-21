import SelectInput from ".";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SelectInput", () => {
  beforeEach(() => {
    const props = {
      options: [1, 2, 3],
      selected: 2,
      updateSelected: () => {},
    };

    render(<SelectInput {...props} />);
  });

  it("shows the default option only", () => {
    expect(screen.getByText("2 GB")).toBeInTheDocument();
    expect(screen.queryByText("1 GB")).toBeFalsy();
    expect(screen.queryByText("3 GB")).toBeFalsy();
  });

  it("toggles all options when clicked", () => {
    // clicking the selected/default option should show the options container
    fireEvent.click(screen.getByText("2 GB"));

    expect(screen.getAllByText("2 GB").length).toBe(2);
    expect(screen.getByText("1 GB")).toBeInTheDocument();
    expect(screen.getByText("3 GB")).toBeInTheDocument();

    // clicking any of the options should hide their container
    fireEvent.click(screen.getByText("1 GB"));

    expect(screen.getByText("2 GB")).toBeInTheDocument();
    expect(screen.queryByText("1 GB")).toBeFalsy();
    expect(screen.queryByText("3 GB")).toBeFalsy();
  });
});

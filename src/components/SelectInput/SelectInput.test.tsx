import SelectInput from ".";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SelectInput", () => {
  const props = {
    options: [1, 2, 3],
    selected: 2,
    updateSelected: () => {},
  };

  render(<SelectInput {...props} />);

  it("shows options when clicked", () => {
    expect(screen.getByText("2 GB")).toBeInTheDocument();
    expect(screen.queryByText("1 GB")).toBeFalsy();
    expect(screen.queryByText("3 GB")).toBeFalsy();

    fireEvent.click(screen.getByText("2 GB"));

    expect(screen.getAllByText("2 GB").length).toBe(2);
    expect(screen.getByText("1 GB")).toBeInTheDocument();
    expect(screen.getByText("3 GB")).toBeInTheDocument();
  });
});

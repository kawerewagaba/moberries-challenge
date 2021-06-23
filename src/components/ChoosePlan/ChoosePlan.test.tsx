import ChoosePlan from ".";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../redux/reducers";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ChoosePlan", () => {
  beforeEach(() => {
    const store = createStore(rootReducer, {});

    render(
      <Provider store={store}>
        <ChoosePlan />
      </Provider>
    );
  });

  it("renders the defaults, including the total", () => {
    expect(
      screen.getByText("Duration: 12 months / Storage: 5 GB / Payment: No")
    ).toBeInTheDocument();

    // calculated total: price * storage
    expect(screen.getByTestId("total")).toHaveTextContent("10");
  });

  it("reduces the total by 10% when upfront payment is on", () => {
    fireEvent.click(screen.getByTestId("switch"));

    expect(
      screen.getByText("Duration: 12 months / Storage: 5 GB / Payment: Yes")
    ).toBeInTheDocument();

    expect(screen.getByTestId("total")).toHaveTextContent("9");
  });
});

import Home from ".";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../redux/reducers";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Home", () => {
  beforeEach(() => {
    const store = createStore(rootReducer, {});

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  it("moves to the payment details step when the next button is clicked", () => {
    fireEvent.click(screen.getByText(/^next$/i));

    expect(screen.getByText(/provide payment details/i)).toBeInTheDocument();
  });

  it("moves back to plans when the back button is clicked", () => {
    fireEvent.click(screen.getByText(/^next$/i));

    fireEvent.click(screen.getByTestId(/back-button/i));

    expect(screen.getByText(/choose a plan/i)).toBeInTheDocument();
  });
});

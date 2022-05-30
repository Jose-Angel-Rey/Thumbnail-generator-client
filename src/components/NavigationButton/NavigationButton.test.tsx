import NavigationButton from "./NavigationButton";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { FileSearchOutlined } from "@ant-design/icons";

describe("<NavigationButton />", () => {
  const history = createMemoryHistory();
  let component = () =>
    render(
      <Router location={history.location} navigator={history}>
        <NavigationButton
          icon={<FileSearchOutlined />}
          text="Go to home"
          to="/"
        />
      </Router>
    );

  it("should render correctly", () => {
    component();
    expect(screen.getByText(/go to home/i)).toBeInTheDocument();
  });

  it("should render the given icon", () => {
    component();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render the given text", () => {
    component();
    expect(screen.getByText(/go to home/i)).toContainElement(
      screen.getByText(/go to home/i)
    );
  });

  it("should navigate to the given path", () => {
    component();
    const button = screen.getByText(/go to home/i);
    button.click();
    expect(history.location.pathname).toBe("/");
  });
});

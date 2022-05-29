import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("<Loader />", () => {
  let component = () => {
    return render(<Loader message="Loading..." />);
  };

  it("should render the component", () => {
    component();
    expect(screen.getAllByLabelText("Loader")).toBeTruthy();
  });

  it("should render the message prop", () => {
    component();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});

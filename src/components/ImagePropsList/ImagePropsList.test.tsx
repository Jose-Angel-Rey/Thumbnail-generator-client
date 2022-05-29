import { render, screen } from "@testing-library/react";
import ImagePropsList from "./ImagePropsList";

describe("<ImagePropsList />", () => {
  let component = () => {
    return render(
      <ImagePropsList format="JPEG" bytes="1234" width="400" height="300" />
    );
  };

  it("should render the component", () => {
    component();
    expect(screen.getByLabelText("Image properties")).toBeInTheDocument();
  });

  it("should render the format prop", () => {
    component();
    expect(screen.getByText(/jpeg/i)).toBeInTheDocument();
  });

  it("should render the bytes prop", () => {
    component();
    expect(screen.getByText(/1234 bytes/i)).toBeInTheDocument();
  });

  it("should render the height prop", () => {
    component();
    expect(screen.getByText(/300px/i)).toBeInTheDocument();
  });

  it("should render the width prop", () => {
    component();
    expect(screen.getByText(/400px/i)).toBeInTheDocument();
  });
});

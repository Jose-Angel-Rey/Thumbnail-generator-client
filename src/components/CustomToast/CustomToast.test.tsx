import { render, screen } from "@testing-library/react";
import CustomToast from "./CustomToast";
import { CopyOutlined } from "@ant-design/icons";

describe("<CustomToast />", () => {
  let component = () => {
    return render(
      <CustomToast icon={<CopyOutlined />} message="Custom Toast" />
    );
  };

  it("should render the component", () => {
    component();
    expect(screen.getByTitle("Custom Toast")).toBeInTheDocument();
  });

  it("should render the icon prop", () => {
    component();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render the text prop", () => {
    component();
    expect(screen.getByText(/Custom Toast/i)).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";
import { FileSearchOutlined } from "@ant-design/icons";

describe("<CustomButton />", () => {
  const mockOnClick = jest.fn();

  let component = () => {
    return render(
      <CustomButton
        onClick={mockOnClick}
        icon={<FileSearchOutlined />}
        text="Custom Button"
      />
    );
  };

  it("should render the component", () => {
    component();
    expect(screen.getByText(/custom Button/i)).toBeInTheDocument();
  });

  it("should call the onClick function", () => {
    component();
    fireEvent.click(screen.getByText(/custom Button/i));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should not call the onClick function if is not clicked", () => {
    component();
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("should render the icon", () => {
    component();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render the text", () => {
    component();
    expect(screen.getByText(/Custom Button/i)).toBeInTheDocument();
  });

  it("should render the text, icon and call the onClick function", () => {
    component();
    fireEvent.click(screen.getByText(/Custom Button/i));
    expect(mockOnClick).toHaveBeenCalled();
    expect(screen.getByText(/Custom Button/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

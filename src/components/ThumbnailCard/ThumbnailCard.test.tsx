import { render, screen, fireEvent } from "@testing-library/react";
import ThumbnailCard from "./ThumbnailCard";

describe("<ThumbnailCard />", () => {
  let component = () => {
    return render(
      <ThumbnailCard
        imageSrc="https://ik.imagekit.io/8k98kll7xyh/Portfolio/Frameworks/Thumbnail_generator/logo_eIY470XQs.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1652355597002"
        height={150}
        width={150}
      />
    );
  };

  it("should render correctly", () => {
    component();
    const image = screen.getByAltText("Thumbnail: 150x150");
    expect(image).toBeInTheDocument();
  });

  it("should render the correct title", () => {
    component();
    const title = screen.getByText("150 x 150");
    expect(title).toBeInTheDocument();
  });

  it("should render the correct actions", () => {
    component();
    const actions = screen.getAllByRole("button");
    expect(actions).toHaveLength(3);
  });

  it("should render the correct action icons", () => {
    component();
    const actions = screen.getAllByRole("button");
    expect(actions[0]).toHaveAttribute("title", "Preview");
    expect(actions[1]).toHaveAttribute("title", "Copy to clipboard");
    expect(actions[2]).toHaveAttribute("title", "Download");
  });

  it("should preview the image when the preview button is clicked", () => {
    component();
    const previewButton = screen.getByTitle("Preview");
    fireEvent.click(previewButton);
    expect(screen.getByTitle(/Thumbnail preview/i)).toBeInTheDocument();
  });

  it("should copy the image url to clipboard when the copy button is clicked", () => {
    component();
    const copyButton = screen.getByTitle("Copy to clipboard");
    fireEvent.click(copyButton);
    expect(
      screen.getByText("Image URL copied to clipboard")
    ).toBeInTheDocument();
  });
});

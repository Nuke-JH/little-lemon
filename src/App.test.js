import { render, screen } from "@testing-library/react";
import ReservationForm from "./components/ReservationForm";

test("renders ReservationForm heading", () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("First Name");
  expect(headingElement).toBeInTheDocument();
});

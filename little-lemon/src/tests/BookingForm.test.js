import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test('test name', () => {
    render(<BookingForm />);
    const submitElement = screen.getByText("Submit reservation");
    expect(submitElement).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react"
import Date from "./Date";

describe("Date Component Test Suites", () => {
    it("should hide the more and ticket link if not filled in the data", () => {
        const date_content = {
            month: "January",
            day: "15",
            place_geo: "Paris, France",
            place_name: "Le Zenith",
            more_link: "",
            ticket_link: "",
        };

        render(<Date date_content={date_content} />);

        const more_link = screen.getByTestId("more-link");
        const ticket_link = screen.getByTestId("ticket-link");
        
        expect(more_link).toHaveClass("invisible");
        expect(ticket_link).toHaveClass("invisible");
    })
})
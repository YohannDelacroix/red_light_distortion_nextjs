import { render, cleanup } from "@testing-library/react";
import TitleComponent from "./TitleComponent";

describe("Title Component Test Suites", () => {
    it('renders a title with default props', () => {
        const { getByTestId } = render(<TitleComponent titleContent="Default Title" />);
        const title = getByTestId("heading-tag");

        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe('Default Title');
        expect(title.id).toMatch(/^title-[a-z0-9]{9}$/); // Check the dynamic generated ID
    });

    it('renders the correct heading level based on the "level" prop', () => {
        for (let i = 1; i <= 6; i++) {
            const { getByTestId } = render(<TitleComponent titleContent={`Level ${i}`} level={i} />);
            const title = getByTestId("heading-tag");

            expect(title).toBeInTheDocument();
            expect(title.tagName).toBe(`H${i}`); //H must be in capital case, because the tag is returned in capital case in the field "tagName"

            cleanup(); //Avoid the data-testid error because TitleComponent is mounted multiple times because of the for loop
        }
    });

    it('defaults to h1 if an invalid level is provided', () => {
        for (let i = -2; i <= 8; i++) {
            if (i >= 1 && i <= 6) {
                continue; // Don't test H1 to H6
            }
            const { getByTestId } = render(<TitleComponent titleContent="Invalid Level" level={i} />);
            const title = getByTestId("heading-tag");

            expect(title).toBeInTheDocument();
            expect(title.tagName).toBe('H1'); //H1 must be in capital case, because the tag is returned in capital case in the field "tagName"
            cleanup();
        }
    });

    it('renders with a custom ID when "titleId" is provided', () => {
        const customId = 'custom-title-id';
        const { getByTestId } = render(<TitleComponent titleContent="Custom ID Title" titleId={customId} />);
        const title = getByTestId("heading-tag");
    
        expect(title.id).toBe(customId);
    });

    it('generates unique dynamic IDs for multiple instances without "titleId"', () => {
        const { getByText: getFirst } = render(<TitleComponent titleContent="First Title" />);
        const { getByText: getSecond } = render(<TitleComponent titleContent="Second Title" />);
    
        const firstId = getFirst('First Title').id;
        const secondId = getSecond('Second Title').id;
    
        expect(firstId).not.toBe(secondId);
    });
})
import HomeVideoSection from "./HomeVideoSection";
import { render } from "@testing-library/react";

describe("Home Video Section Test Suites", () => {
    it('should render the video section', () => {
        const { container } = render(<HomeVideoSection />);
        const section = container.querySelector('section.home-video');
        expect(section).toBeInTheDocument();

        const iframe = section.querySelector('iframe');
        expect(iframe).toBeInTheDocument();
    });
})

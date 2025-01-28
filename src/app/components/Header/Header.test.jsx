import { render, screen, fireEvent } from "@testing-library/react"
import HeaderMobile from "./HeaderMobile";

describe("Header Test Suites", () => {
    const links = [
        { label: "Tour", href: "/tour" },
        { label: "News", href: "/news" },
        { label: "Photos", href: "/photos" },
        { label: "Videos", href: "/videos" },
        { label: "Universe", href: "/universe" },
        { label: "About", href: "/about" },
    ];

    it("should renders links in mobile version", () => {
        render(<HeaderMobile links={links} />)
        
        links.forEach(link => {
            expect(screen.getByText(link.label)).toBeInTheDocument();
        });
    })

    it("should display the menu in mobile version when the button is toggled", () => {
        render(<HeaderMobile links={links} />)

        const toggleButton = screen.getByTestId("header-mobile-toggle_button");
        const nav = screen.getByTestId("header-nav-mobile");
      
        //Check the menu is hidden at the beginning
        expect(nav).toHaveClass('nav-mobile-hidden');
      
        //Simulate a click to open the menu
        fireEvent.click(toggleButton)
        expect(nav).toHaveClass('nav-mobile'); // Le menu devrait maintenant être visible
      
        //Simulate a click to close the menu
        fireEvent.click(toggleButton)
        expect(nav).toHaveClass('nav-mobile-hidden'); // Le menu devrait être caché à nouveau
    })
})
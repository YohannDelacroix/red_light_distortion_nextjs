import { render, screen, waitFor } from "@testing-library/react";
import HomeTourSection from "./HomeTourSection";
import axios from 'axios';

jest.mock('@/api/staticTourDates', () => ({
    getStaticTourDates: jest.fn(),
}));

jest.mock("axios");

describe("Home Tour Section Test Suites", () => {
    describe("Static Version tests", () => {
        beforeAll(() => {
            process.env.NEXT_PUBLIC_STATIC_VERSION = "true";
        })

        afterEach(() => {
            jest.restoreAllMocks()
        })

        it("should display no upcoming tour dates if the array provided is empty", async () => {
            const { getStaticTourDates } = require('@/api/staticTourDates');
            getStaticTourDates.mockReturnValue([])

            render(await (async () => await HomeTourSection())())

            const noUpcomingDatesElement = screen.getByTestId('no-tour-dates');
            expect(noUpcomingDatesElement).toBeInTheDocument();
            expect(noUpcomingDatesElement).toHaveTextContent('No upcoming tour dates');
        })

        it("should render static tour dates correctly", async () => {
            const { getStaticTourDates } = require('@/api/staticTourDates');
            getStaticTourDates.mockReturnValue([
                {
                    day: 1,
                    month: 'JAN',
                    place_geo: 'München, Bayern Deutschland',
                    place_name: 'Die Welt',
                    ticket_link: '',
                    more_link: ''
                }
            ]);

            render(await (async () => await HomeTourSection())())

            expect(screen.getByText('München, Bayern Deutschland')).toBeInTheDocument();
        })
    })

    describe("Dynamic version tests", () => {
        beforeAll(() => {
            process.env.NEXT_PUBLIC_STATIC_VERSION = "false";
        })

        it("should display tour dates correctly when API returns data", async () => {
            // Mock data provided by the back end API
            const mockTourDates = [
                {
                    day: 1,
                    month: 'JAN',
                    place_geo: 'München, Bayern Deutschland',
                    place_name: 'Die Welt',
                    ticket_link: '',
                    more_link: ''
                },
                {
                    day: 3,
                    month: 'FEB',
                    place_geo: 'Angers, Pays de la Loire, France',
                    place_name: 'T es rock coco',
                    ticket_link: 'http://google.com',
                    more_link: ''
                },
                {
                    day: 3,
                    month: 'FEB',
                    place_geo: 'Angers, Pays de la Loire, France',
                    place_name: 'T es rock coco',
                    ticket_link: 'http://google.com',
                    more_link: ''
                }
            ];

            axios.get.mockResolvedValue({ data: mockTourDates });

            const { getByTestId } = render(await (async () => await HomeTourSection())())

            for (let i = 0; i < mockTourDates; i++) {
                expect(getByTestId(`date${i}`)).toBeInTheDocument();
            }
        });

        it("should display error message if API fails", async () => {
            // Simulate an API error
            axios.get.mockRejectedValue(new Error('API Error'));

            render(await (async () => await HomeTourSection())())

            const homeTourSection = screen.queryByTestId('home-tour-section');
            expect(homeTourSection).not.toBeInTheDocument();
        });
    })
})
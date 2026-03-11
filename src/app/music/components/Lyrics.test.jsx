import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Lyrics from "./Lyrics";
import { staticLyrics } from "@/api/staticLyrics";

describe("Lyrics Component Test Suites", () => {
    describe("Lyrics Component - Loading Lyrics", () => {
        beforeEach(() => {
            process.env.NEXT_PUBLIC_STATIC_VERSION = "true"; // Forcer la version statique
        });

        it("display the song's list when the data are loaded", async () => {
            render(<Lyrics />);
            await waitFor(() => expect(screen.getByText(staticLyrics[0].title)).toBeInTheDocument());
        });
    });

    it("display all the lyrics when a song is selected", async () => {
        render(<Lyrics />);
        const songButton = await screen.findByText(staticLyrics[0].title);

        fireEvent.click(songButton);

        await waitFor(async () => {
            for (const line of staticLyrics[0].lyrics_en) {
                const lyricsLines = await screen.findAllByText(line);
                expect(lyricsLines.length).toBeGreaterThan(0); // Check that one line or more is part of the text
            }
        });
    });


    it("close the lyrics when close button is clicked", async () => {
        render(<Lyrics />);
        const songButton = await screen.findByText(staticLyrics[0].title);
        fireEvent.click(songButton);

        const closeButton = await screen.findByTestId("universe-song-button-close");
        fireEvent.click(closeButton);

        //Check the universe-song div is reduced to 0px height
        await waitFor(() => {
            expect(screen.getByTestId("universe-song")).toHaveStyle("max-height: 0px");
        });
    });
})

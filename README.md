# **Red Light Distortion Web**

## Description
Red Light Distortion Web is an official website for a music band that serves as a hub for fans and followers. The platform allows users to stay updated with the latest news about the band, including upcoming tour dates, new video releases, lyrics to their songs, biographies of the band members, and a gallery of photos. Additionally, visitors can subscribe to a newsletter to receive exclusive content and updates directly in their inbox.

The website is designed to provide a comprehensive and engaging experience for fans, offering everything they need to stay connected with the band and follow their musical journey.

**Main Features**:
- News Section: Stay up-to-date with the latest news and updates from the band. Get the latest information on releases, events, and important announcements.
- Tour Dates: View upcoming concert dates, venues, and ticket information to never miss a live performance from the band.
- Videos: Watch the latest music videos, live performances, and behind-the-scenes content to connect with the band on a deeper level.
- Song Lyrics: Access the lyrics to all the band's songs and follow along with their music. Sing along to your favorite tracks!
- Band Biographies: Learn more about the band members and their musical journey through detailed biographies and background stories.
- Photo Gallery: Explore a collection of high-quality photos showcasing the band's performances, studio sessions, and other memorable moments.
- Newsletter Subscription: Sign up for the band’s newsletter to receive exclusive updates, early access to new content, and special offers.

## Demo

You can try the Red Light Distortion website online by clicking the following link:  
[Red Light Distortion Web](https://redlightdistortion.netlify.app/)

## Technologies Used

This project was developed using the following technologies:
- **React** (version 19)
- **Next** (version 16)
- **Javascript** 
- **CSS** 
- **Axios** - Requests to external APIs or backend services.
- **Jest**
- **React Testing Library** 
- **Netlify** (for deployment)

### Project Structure

Here’s an overview of the project structure with a description of each important file/folder:

rld_website/
│
├── public/                  
│   ├── fonts/                      # Font files (if any)
│   ├── assets/                     # Static assets used throughout the website
│   └── images/                     # Image assets used throughout the website
│       ├── about/                  # Images for the "about" section
│       ├── footer/                 # Images for the footer component
│       ├── gallery/                # Images for the gallery section
│       ├── header/                 # Images for the header component
│       ├── home/                   # Images for the home page
│       └── news/                   # Images for the news section
│
├── src/                    
│   ├── app/                        # Main directory of Next.js containing routes, pages, layouts
│   │   ├── components/             # Reusable components across the app
│   │   │   ├── Footer/             # Footer component
│   │   │   ├── Home/               # Home component
│   │   │   ├── Header/             # Header component
│   │   │   ├── Loading/            # Loading component
│   │   │   ├── ServerError/        # Server Error component
│   │   │   └── TitleComponent/     # Title component
│   │   ├── about/                  # Route for "about" (biographies)
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── photos/                 # Photos section
│   │   ├── videos/                 # Videos section
│   │   ├── news/                   # News section
│   │   │   ├── components/         # Components for the news section
│   │   │   ├── [id]/               # Nested route for dynamic news articles
│   │   │   ├── page.js             # Main news page
│   │   │   └── layout.js           # Layout for the news section
│   │   ├── tour/                   # Tour section
│   │   │   ├── components/         # Components for the tour section
│   │   │   └── page.js             # Tour page
│   │   └── universe/               # Universe section
│   │       ├── components/         # Components for the universe section
│   │       └── page.js             # Universe page
│   ├── styles/                     # CSS styles (global and component-specific)
│   └── api/                        # API-related code (static data, API calls)
│
├── data/                           # Contains the data directory
│   └── imageList.json              # Generated image list for the project
│
├── next.config.js                  # Next.js configuration file
├── package.json                    # Project metadata, dependencies, and scripts
├── README.md                       # Project documentation
├── generateImageList.js            # Script to generate image list (imageList.json)
└── yarn.lock / package-lock.json   # Dependency lock files (yarn or npm)


### Authors

    Yohann Delacroix – Full-Stack Developer

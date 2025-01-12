import "./styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Red Light Distortion",
  description: "*********************************************",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/RLDLogoFondNoir.ico" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

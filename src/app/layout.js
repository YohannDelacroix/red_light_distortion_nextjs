export const metadata = {
  title: "Red Light Distortion",
  description: "*********************************************",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

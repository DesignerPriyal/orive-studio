import "./globals.css";
import {
  Inter,
  Playfair_Display,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Orive Design Studio",
  description: "Branding, UI/UX, Packaging & Digital Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
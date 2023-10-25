import type { Metadata } from "next";
import Header from "./component/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokooya Nifemi",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

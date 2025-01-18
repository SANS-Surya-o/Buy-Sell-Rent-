import type { Metadata } from "next";
import "@app/globals.css";
import Nav from "@features/navbar";
import Footer from "@features/footer";


export const metadata: Metadata = {
  title: "Buy Sell Rent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      > 
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}

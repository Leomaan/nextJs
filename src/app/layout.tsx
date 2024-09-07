import type { Metadata } from "next";
import "./globals.css";
import {Lato} from 'next/font/google'
import Header from "./components/Header";

const lato = Lato({
  subsets: ['latin'],
  weight:['400','700']
})


export const metadata: Metadata = {
  title: "Itaú Banco",
  description: "Site do Bando Itaú",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
      <Header/>
        {children}
      </body>
    </html>
  );
}

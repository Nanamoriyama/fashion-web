import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { WishlistProvider } from "../contexts/WishlistContext";
import Head from "next/head";

export const metadata = {
  title: "Luxury fashion website | DIOR",
  description: "Nana's fashion website",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        <UserProvider>
          <WishlistProvider>
            <ClientLayout>{children}</ClientLayout>
          </WishlistProvider>
        </UserProvider>
      </body>
    </html>
  );
}

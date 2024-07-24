import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { WishlistProvider } from "../contexts/WishlistContext"; // 追加

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <UserProvider>
          <WishlistProvider>
            <ClientLayout>{children}</ClientLayout>
          </WishlistProvider>
        </UserProvider>
      </body>
    </html>
  );
}

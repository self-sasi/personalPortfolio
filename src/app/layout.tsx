"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppCommand } from "@/components/ui/app-command";
import { SearchBar } from "@/components/ui/search-bar";
import React from "react";
import { ThemeSync } from "@/components/theme-sync";
import "primeicons/primeicons.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSync />
          <div className="min-h-dvh">
            <AppCommand open={open} onOpenChange={setOpen} />

            {/* content display div */}
            <div className="mx-auto w-full max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl p-4">
              {/* top search bar div  */}
              <div className="flex w-full justify-center">
                <SearchBar
                  onOpen={() => setOpen(true)}
                  className="w-full max-w-md"
                />
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

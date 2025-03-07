import type { Metadata } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const zain = localFont({
  src: [
    {
      path: "./fonts/Zain-ExtraLight.ttf",
      weight: "100",
    },
    {
      path: "./fonts/Zain-Light.ttf",
      weight: "250",
    },
    {
      path: "./fonts/Zain-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Zain-Bold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Zain-ExtraBold.ttf",
      weight: "750",
    },
    {
      path: "./fonts/Zain-Black.ttf",
      weight: "900",
    }
    
  ],
  variable: "--font-zain",
});

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <TooltipProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} ${zain.variable} antialiased`}>
            <ErrorWrapper>{children}
            </ErrorWrapper>
          </body>
        </TooltipProvider>
      </ThemeProvider>
    </html>
  );
}

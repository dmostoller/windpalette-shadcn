import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInjector } from "@/components/theme-injector";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WindPalette | Shadcn/ui Theme Generator",
  description:
    "Generate beautiful and customizable themes for your Shadcn/ui projects with WindPalette. Create stunning color palettes and export them directly into your project.",
  keywords: [
    "shadcn/ui",
    "tailwind css",
    "theme generator",
    "color palette",
    "ui design",
    "react components",
    "windpalette",
  ],
  authors: [{ name: "WindPalette" }],
  openGraph: {
    title: "WindPalette | Shadcn/ui Theme Generator",
    description:
      "Generate beautiful and customizable themes for your Shadcn/ui projects with WindPalette. Create stunning color palettes and export them directly into your project.",
    url: "https://windpalette-shadcn.vercel.app/",
    siteName: "WindPalette",
    images: [
      {
        url: "https://windpalette-shadcn.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "WindPalette Shadcn/ui Theme Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WindPalette | Shadcn/ui Theme Generator",
    description:
      "Generate beautiful and customizable themes for your Shadcn/ui projects with WindPalette. Create stunning color palettes and export them directly into your project.",
    images: ["https://windpalette-shadcn.vercel.app/og-image.png"],
    creator: "@dave_mostoller",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeInjector />
          <main className="pt-[73px]">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

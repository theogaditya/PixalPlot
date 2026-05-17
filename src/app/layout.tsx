import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistBody = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-body",
  display: "swap",
});

const geistHeadline = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelPlot — AI App Builder · PixalPlot",
  description:
    "PixelPlot's AI-powered code-generation studio. Describe what you want, approve the plan, and watch your app come to life in-browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
        appearance={{
        variables: {
          colorPrimary: "hsl(var(--primary))",
          colorBackground: "hsl(var(--background))",
          colorInputBackground: "hsl(var(--input))",
          colorText: "hsl(var(--foreground))",
          colorTextSecondary: "hsl(var(--muted-foreground))",
          colorTextOnPrimaryBackground: "hsl(var(--primary-foreground))",
          colorNeutral: "hsl(var(--foreground))",
          borderRadius: "0.625rem",
        },
        elements: {
          card: "shadow-xl border",
          headerTitle: "font-bold",
          headerSubtitle: "",
          formButtonPrimary: "bg-accent text-accent-foreground",
          footerActionLink: "font-semibold",
          identityPreviewText: "",
          formFieldInput: "border focus:border-accent focus:ring-accent",
          dividerLine: "",
          dividerText: "",
          socialButtonsIconButton: "",
          navbar: "hidden",
          navbarMobileMenuButton: "hidden",
        },
      }}
    >
      <html
        lang="en"
        suppressHydrationWarning
        className={`${geistBody.variable} ${geistHeadline.variable}`}
      >
        <body
          className="antialiased bg-background text-foreground"
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1708287984162194"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}

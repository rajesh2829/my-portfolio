import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajesh | Frontend Developer (React.js, Next.js, TypeScript)",
  description:
    "Portfolio of Rajesh - Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web applications with 3+ years experience, backed by an Agricultural Engineering & irrigation background.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript",
    "Agricultural Engineering",
    "Irrigation Projects",
    "PMKSY",
    "Per Drop More Crop",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
          <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        </ThemeProvider>
      </body>
    </html>
  );
}

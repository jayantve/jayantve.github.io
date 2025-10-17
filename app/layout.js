import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Component/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/Component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shree Krishna F/M Services",
  description: "Shree Krishna FM Services is a modern Facility Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange 
        >
        <Navbar />
        {children}
        <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
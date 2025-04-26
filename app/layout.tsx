import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { HeaderMain } from "@/modules/root/components/header-main";
import { FooterMain } from "@/modules/root/components/footer-main";
import { Toaster } from "@/components/ui/sonner"
import { QueryClientProvider } from "@/components/providers/query-client-provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Feedback Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased container w-full mx-auto max-w-7xl px-4 py-5`}
      >
        <ThemeProvider>
          <HeaderMain />
          <QueryClientProvider>
            {children}
          </QueryClientProvider>
          <Toaster />
          <FooterMain />
        </ThemeProvider>
      </body>
    </html>
  );
}

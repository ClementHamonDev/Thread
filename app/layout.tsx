import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/src/features/layout/Header";
import Footer from "@/src/features/layout/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thread",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <ScrollArea>
              <div className="flex-1 max-w-lg m-auto py-12 w-full">
                {children}
              </div>
            </ScrollArea>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

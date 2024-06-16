import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "Tahir Abbas",
    default: "Tahir Abbas - Web Developer",
  },
  description:
    "Portfolio and personal website of Tahir Abbas, a web developer based in Pakistan.",
};

import { DefaultAppShell } from "@/components/appshell";
import MantineCustomProvider from "@/app/mantine-custom-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-yellow-300 selection:text-yellow-900"
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NextTopLoader color="#ffd43b" showSpinner={false} />

        <MantineCustomProvider>
          <Notifications position="top-right" zIndex={1000} autoClose={10000} />

          <DefaultAppShell>{children}</DefaultAppShell>
        </MantineCustomProvider>
      </body>
    </html>
  );
}

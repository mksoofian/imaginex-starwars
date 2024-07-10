import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Star Wars",
  description: "Search the Star Wars Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={(fonts.rubik.variable, fonts.roboto_mono.variable)}
    >
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

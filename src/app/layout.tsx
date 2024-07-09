import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";

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
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

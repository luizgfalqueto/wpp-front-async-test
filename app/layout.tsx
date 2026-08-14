import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
import "./globals.css";
import "./reset.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp",
  description: "WhatsApp Web Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}

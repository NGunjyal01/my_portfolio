import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nakshatra Gunjyal",
  description: "This is my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}

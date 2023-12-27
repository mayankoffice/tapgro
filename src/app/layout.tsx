"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <meta
          name="title"
          content="India's No.1 Software for Beauty Business - Tapgro"
        />
        <meta
          name="description"
          content="Boost sales, manage staff, and streamline operations with TapGro's salon software. Grow your business with Tapgro today"
        />
        <meta
          name="keywords"
          content="tapgro, tapgroofficial, what is tapgro, is tapgro good, tapgro linked in, tapgro location, tapgro instagram, tapgro app, tapgro software , tapgro tool, tapgro website"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta
          property="og:title"
          content="Simplify management, supercharge marketing with tapgro"
        />
        <meta property="og:site_name" content="TapGro" />
        <meta property="og:url" content="https://www.tapgro.com/" />
        <meta
          property="og:description"
          content="Your key to boosting sales managing staff, and thriving in your industry"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tapgro.com/_next/image?url=%2Flogos%2Flogo.png&w=640&q=75"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Tapgro" />
        <meta
          name="twitter:title"
          content="Simplify Management, Supercharge Marketing with TapGro"
        />
        <meta
          name="twitter:description"
          content="Your key to boosting sales, managing staff, and thriving in your industry"
        />
        <meta
          name="twitter:image"
          content="https://tapgro.com/_next/image?url=%2Flogos%2Flogo.png&w=640&q=75"
        />

        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

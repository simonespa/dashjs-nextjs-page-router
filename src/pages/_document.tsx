import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

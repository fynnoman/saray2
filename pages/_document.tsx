import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Unsichtbarer, winziger Link */}
        <a
          href="https://www.taskeyapp.com"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            fontSize: "1px",
            opacity: 0.01,
          }}
          tabIndex={-1}
          aria-hidden="true"
        >
          taskey
        </a>
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://picsum.photos/200"/>
        <meta property="og:image" content="/image.svg"/>
        <meta property="fc:frame:button:1" content="Coucou"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

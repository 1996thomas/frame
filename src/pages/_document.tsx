import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="/image.svg"/>
        <meta property="og:image" content="/image.svg"/>
        <meta property="fc:frame:button:1" content="Team A"/>
        <meta property="fc:frame:button:2" content="Team B"/>
        <meta property="fc:frame:button:2" content="Summary"/>
        <meta property="fc:frame:button:2" content="Exit"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

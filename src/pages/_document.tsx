import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://svgshare.com/s/13fG.svg"/>
        <meta property="og:image" content="https://svgshare.com/i/13fG.svg"/>
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

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <meta name="color-scheme" content="" />
        <meta name='viewport' content="width=device-width, initial-scale=1.0, virtual-keyboard=overlays-content"/>
        <link rel="icon" type="image/png" sizes="18x18" href="/assets/images/logo.svg"/>
        <link rel="stylesheet" href="/assets/fonts/YekanBakhFaNum/Webfonts/fontiran.css" />
        <link rel="stylesheet" href="/vendor/fontawesome/css/all.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

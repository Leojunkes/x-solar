import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>X-Solar</title>
        <Head>
          
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/solarx.png"
            type="image/png"
          />

          <script
            type="text/javascript"
            src="https://js.stripe.com/v3/"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

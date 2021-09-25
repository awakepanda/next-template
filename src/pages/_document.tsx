import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link> */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp-noto.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="relative">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

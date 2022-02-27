import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1139991563947565"
         crossorigin="anonymous"></script>
          <meta charset="UTF-8"></meta>
          <meta name="description" content="Pour obtenir des conseils financiers personnels sur l'épargne et l'investissement, des astuces et des articles inspirants sur la liberté financière." />
          <meta http-equiv = "content-language" content = "fr"></meta>
          <link rel="canonical" href="https://www.financefacile.fr" />
          <link rel="apple-touch-icon" href="../public/apple-touch-icon.jpg"></link>
          <title>Liberté financière - FinanceFacile</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

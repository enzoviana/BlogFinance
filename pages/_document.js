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
          <meta name="description" content="Suivez le blog pour obtenir des conseils financiers personnels pour les femmes et les hommes sur l'épargne et l'investissement, des astuces de budgétisation et des articles inspirants sur les personnes qui atteignent la liberté financière. " />
          <meta http-equiv = "content-language" content = "fr"></meta>
          <link rel="canonical" href="https://www.financefacile.fr" />
          <title>FinanceFacile</title>
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

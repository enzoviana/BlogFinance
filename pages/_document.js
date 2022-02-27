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
          <link rel="icon" type="image/x-icon" href="../public/favicon.ico"></link>
          <title>Liberté financière - FinanceFacile</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <footer>
        <div id="fb-root"></div>
              <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v13.0" nonce="6gIhfXSP"></script>
              <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Partager</a></div>
        </footer>
      </Html>
    );
  }
}

export default MyDocument;

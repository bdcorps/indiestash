import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(v,i,s,a){if(!v._visaSettings){v._visaSettings = {};}v._visaSettings["5515ce27-7a57-11eb-b589-901b0edac50a"]={v:"0.3",s:"5515ce27-7a57-11eb-b589-901b0edac50a",a:"1"};_v=i.getElementsByTagName("head")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["5515ce27-7a57-11eb-b589-901b0edac50a"].v;_a.appendChild(_s);})(window,document,"//app-worker.visitor-analytics.io/main",".js?s=5515ce27-7a57-11eb-b589-901b0edac50a&v=")`
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
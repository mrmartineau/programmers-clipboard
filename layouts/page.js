// Components
import Head from 'next/head'
import styleVars from '../misc/style-vars';

export default ({ children }) => (
  <main>
    <Head>
      <title>Programmer's clipboard</title>
      <meta description="Copy unicode characters to your clipboard for use in different programming languages: CSS, Javascript, HTML and plain text"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='stylesheet' href='https://cdn.rawgit.com/TryKickoff/kickoff/72581bbd/assets/dist/css/kickoff.css'/>
    </Head>

    {children}

    <footer className="text-centre">
      <p>
        <small>
          If you would like to add more characters, please modify <a href="https://github.com/mrmartineau/programmers-clipboard/blob/master/misc/charsList.json">this file</a> <br/>
          <a href="https://github.com/mrmartineau/programmers-clipboard">Made</a> by <a href="https://zander.wtf">Zander ⚡</a><br/>
          using <a href="https://github.com/zeit/next.js">next.js</a> and hosted on <a href="https://zeit.co/now">now.sh</a>
        </small>
      </p>
    </footer>

    <style jsx global>{`
      html {

      }
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        background-color: ${styleVars.colors.bg};
        font-weight: 300;
      }

      h1,
      h2,
      h3 {
        color: ${styleVars.colors.accent};
        font-weight: 300 !important;
        margin-bottom: 1rem;
      }

      main {
        padding: 30px;
      }

      @media (min-width: 750px) {
        main {
          padding: 45px;
        }
      }

      .form-controlGroup {
        margin: 1rem 0;
      }

      @media (min-width: 750px) {
        .form-input--textarea {
          height: 190px;
        }
      }

      small code {
        font-size: 14px;
        color: ${styleVars.colors.accent};
        background-color: ${styleVars.colors.bg};
        padding: 0;
      }
    `}</style>
  </main>
)

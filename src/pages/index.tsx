import Head from "next/head";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crie seu futuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="estrela/particles-container"></div>
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Carvalho.JW!</a>
        </h1>

        <p className="description">
          Deixe o seu código <code> pages/index.js </code>
        </p>

        <div className="grid">
          <a
            href="https://www.instagram.com/josewellingtom13/"
            className="card"
          >
            <h3>Instagram &rarr;</h3>
            <p>Encontre informações um pouco mais detalhadas detalhadas</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jose-wellington-a64b021b8/"
            className="card"
          >
            <h3>Linkedin &rarr;</h3>
            <p> Venha ver a minha rede social profissional!</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100010831633838"
            className="card"
          >
            <h3>Facebook &rarr;</h3>
            <p>Descubra um pouco mais sobre mim</p>
          </a>

          <a href="https://github.com/josewellington35" className="card">
            <h3>GitHub &rarr;</h3>
            <p>Veja e baixe algumas dasz minhas implementações.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        

       
        #particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #647c94;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #e7dfdd;
          background: #0e0b16;
        }

        main {
          color: #e7dfdd;
          background: #0e0b16;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #e7dfdd;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #4717f6;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #a239ca;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #4717f6;
          border-color: #a239ca;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

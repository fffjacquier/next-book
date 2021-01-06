import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lire - &Eacute;crire</title>
      <meta name="description" content="Objectif de lecture de livres hebdomadaire et d'écriture de mots quotidien" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
  );
};

export default Meta;

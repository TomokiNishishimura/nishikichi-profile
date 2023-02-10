import Head from 'next/head'

const Meta = (pageTitle: string) => {
  return(
    <Head>
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
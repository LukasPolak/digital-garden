import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Garden</title>
        <meta name="description" content="Digital Garden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to My Digital Garden</h1>
      </main>
    </div>
  )
}

export default Home

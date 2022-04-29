import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! v7" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <iframe src=".netlify/functions/hello" height="200" width="300" title="Iframe Example"></iframe>
    </main>

      <Footer />
    </div>
  )
}

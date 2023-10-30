import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HelloWorld from '../components/HelloWorld'

export default function Home() {
  return (
    <>
      <Head>
        <title> Hello World for Next - Dynamsoft Barcode Reader Sample</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Read barcodes from camera with Dynamsoft Barcode Reader in a Next.js Application." />
				<meta name="keywords" content="read barcode from camera in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.UIElement}>
          <HelloWorld />
        </div>
      </main>
    </>
  )
}
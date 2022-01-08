import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <MDBContainer fluid>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar />
        <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Witamy na sklepie!</h1>
        <h4 className='mb-3'>Zachęcamy do zakupów</h4><br />
        <h4 className='mb-3'>Kod promocyjny: WELCOME15*</h4>
        <p className='mb-3'>*Kod obniża cenę o 15% przy zakupach za min. 100zł</p>
        <MDBBtn outline rounded>
        Sprawdź produkty!
      </MDBBtn>
      </div>
      </header>
      <main>{children}</main>
      <Footer />
    </MDBContainer>
  )
}

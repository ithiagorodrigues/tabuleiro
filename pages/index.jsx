import Head from 'next/head'
import Tabuleiro from '../components/tabuleiro'
import styled from '../styles/home.module.css'
export default function Home() {
  return (
    <div className={styled.main}>
      <Head>
        <title>Tabuleiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Tabuleiro/>
      </div>
    </div>
  )
}

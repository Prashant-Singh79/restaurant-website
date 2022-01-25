import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { Featured } from '../components/Featured'

export default function Home() {
  return (
    <div>
     
        <Head>
          <title>Restaurant</title>
        </Head>
        <Featured/>
    </div>
  )
}

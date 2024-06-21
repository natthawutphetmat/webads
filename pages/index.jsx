import React from 'react';
import Header from './components/Header'; // ตรวจสอบว่าถูก export อย่างถูกต้อง
import Service from './components/Service'; // ตรวจสอบว่าถูก export อย่างถูกต้อง
import About from './components/About'; // ตรวจสอบว่าถูก export อย่างถูกต้อง
import styles from '../styles/app.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';




export default function index() {
  return (
    <>
     <Head>
        <title>บริการรับทำโฆษณา ออนไลน์ Facebook, Google</title>
        <meta name="description" content="บริการรับทำโฆษณา ออนไลน์ Facebook, Google" />
        
      </Head>
      <div className='container'>
        <h1 className=' text-center'>
          <div className="text">บริการรับทำโฆษณา ออนไลน์ Facebook, Google</div>
        </h1>
        <Header />
        <div className="cut"></div>
        <Service />
        <About />
        <Link href="https://lin.ee/gLQY1oN"  >
      
          <img src="/img/img/line.png"  className='bounce' width={50} fetchpriority="high" />
        </Link>
       
      </div>
      
    </>
  )
}

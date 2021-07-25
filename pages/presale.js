import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  



    

  



  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>PolySpace | Farm | NFT | Collab |</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="" key="ogtitle" />
        <meta property="og:description" content="tinents, to bring you somen to man." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://polyspace.finance/" key="ogurl"/>
        <meta property="og:image" content="https://polyspace.finance/" key="ogimage"/>
        <meta property="og:site_name" content="https://polyspace.finance/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="" key="twdomain" />
        <meta property="twitter:url" content="https://polyspace.finance/" key="twurl" />
        <meta name="twitter:title" content="" key="twtitle" />
        <meta name="twitter:description" content=", " key="twdesc" />
        <meta name="twitter:image" content="https://polyspace.finance/" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/home.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="" className="text-4xl  hover:text-white m-6 text-blau"></a>
              <a href="/" className="text-5xl text-white hover:text-black m-6">About</a>   
              <a href="/" className="text-5xl text-white hover:text-black m-6">Roadmap</a>
              <a href="/presale" className="text-8xl text-white hover:text-black m-6">Pre~Sale</a>  
              <a href="/" className="text-5xl text-white hover:text-black m-6">Contact</a>
              <a href="https://twitter.com/polyspacefarm" className="text-5xl  hover:text-black m-6 text-blau">TWITTER</a>
              <a href="" className="text-4xl  hover:text-white m-6 text-blau"></a>
            </nav>
             
          </div>
          
        </div>
        <h1  className="  text-7xl Poppitandfinchsans text-black hover:text-black "><br/><span className="hover:text-black text-blau">Round One of Presale Has Begun! </span></h1>
              <div id="mint" className="flex justify-around  mt-8 mx-6"></div>
                <div  className=" p-4"><img src="images/QR.png" alt="" width="400px"  className="feature-image"/></div>
                <a href="https://bscscan.com/address/0x6e226bbc977ae5c3764d594f69468002cf7460db#writeContract" className="text-5xl text-white hover:text-black m-6">0x6E226bBc977Ae5C3764D594f69468002Cf7460Db</a>
                <h2 className="text-black Poppitandfinchsans text-6xl text-center">To Participate in our presale follow the instructions below!</h2>
               
               
                <li className="text-3xl text-blau my-6  montserrat"><span className="font-bold"> <a target="_blank" href="https://bscscan.com/address/0x6e226bbc977ae5c3764d594f69468002cf7460db#writeContract" className="underline text-blau font-bold"> If you are familiar with Contracts you can interact with ours and purchase! </a> </span></li>
               
               
                <li className="text-black Poppitandfinchsans text-5xl text-center">1. Copy the Contract address or take a photo of the QR above!</li>
               
               
                <li className="text-black Poppitandfinchsans text-5xl text-center">2. Send desired amount of BNB! 0.01 BNB Upwards to 25 BNB</li>
               
               
                <li className="text-black Poppitandfinchsans text-5xl text-center">3. Within minutes you will recieve your tokens from the contract!</li>
           
           
           
            </div> 
             
      
    )
  }
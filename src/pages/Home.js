import React from 'react';
import btcSrc from "../assets/btc.png";

const Home = () => {
  return (
    <div className='bg-black flex justify-center items-center h-screen relative'>
           <img src={btcSrc} width={400} height={400}  className='absolute  top-14 coin z-20 '/>
           <p className=' text-white text-6xl   -translate-y-28  self-end z-0'>Xcrypto</p>

    </div>
  )
}

export default Home;
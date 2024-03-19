import React from 'react'

const Footer = () => {

    const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

  return (
    <div className='flex  px-16 bg-black justify-between  items-center py-8'>
         <div className='text flex-col'>
            <p className='text-start font-bold text-slate-300'>About Us</p>
            <p className='text-slate-400'>We are the best crypto trading app in India, we provide our guidance at a very cheap price.</p>
         </div> 
         <div className='img flex-col pb-3'>
            <img  src={avatarSrc} height={105} width={105} className='rounded-full'/>
            <p className='text-slate-400'>Our Founder</p>
         </div>
       
    </div>
  )
}

export default Footer
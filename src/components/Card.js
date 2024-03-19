import React from 'react'

const Card = (props) => {
  return (
    <a href={props.url} className='flex-col justify-center items-center gap-y-2   h-40 w-52   rounded-md shadow-xl mx-6 hover:scale-110 transition ease-in-out duration-300'>
         <img src={props.img} height={40} width={40} className='mx-auto mt-8'/>
         <div className='font-bold text-xl'>{props.rank}</div>
         <div>{props.name}</div> 

    </a>
   
  )
}

export default Card;
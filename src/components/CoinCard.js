import React from 'react'

const CoinCard = (props) => {
  return (
    <div  className='flex flex-col justify-center items-center gap-2 pb-6  h-52 w-52   rounded-md shadow-xl mx-6 hover:scale-110 transition ease-in-out duration-300'>
    <img src={props.coin.image} height={40} width={40} className='mx-auto mt-8'/>
    <div className='font-bold text-xl'>{props.coin.symbol}</div>
    <div>{props.coin.name}</div> 
    <div>{props.coin.current_price}</div>

</div>
  )
}

export default CoinCard
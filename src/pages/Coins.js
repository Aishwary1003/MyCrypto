import React from 'react'
import { useState,useEffect } from 'react';

import Spinner from '../components/Spinner';
import CoinCard from '../components/CoinCard';

const Coins = () => {

       const[coins,setCoins]=useState([]);
       const[loading,setLoading]=useState(false);
       const[currency,setCurrency]=useState("inr");
       const[page,setPage]=useState(1);
       
        
      function CurrencyHandler(event){
        setCurrency(event.target.value);
      }


       const btns = new Array(132).fill(1);


  useEffect(()=>{
        setLoading(true);
      const fetchData= async ()=>{
       try{
         const res=await fetch( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`);
         const data=await res.json();
         setCoins(data);
         setLoading(false);
          }
      
      catch(error){
        setLoading(false);
        console.log("BhaiSahab Error aagya");

      }
    };

      fetchData()
      } ,[currency,page] );
     


  return (
    <div>
          {loading ? <Spinner/> :

            <div>
                  <div className='flex gap-4 ml-12 mt-8 text-base'>
                    <div className='flex gap-2'>
                              <input type="radio" name="coin" value="inr" id="INR" onChange={CurrencyHandler} checked={currency=="inr"} />
                              <label htmlFor='INR'>INR</label>
                    </div>

                    <div className='flex gap-2'>
                               <input type="radio" name="coin"  value="usd" id="USD" onChange={CurrencyHandler} checked={currency=="usd"}/>
                              <label htmlFor='USD'>USD</label>
                    </div>
                 
                     <div className='flex gap-2'>
                               <input type="radio" name="coin" value="eur" id="EUR" onChange={CurrencyHandler} checked={currency=="eur"}/>
                               <label htmlFor='EUR'>EUR</label>
                      </div>
                

                  </div>



                   <div  className='grid grid-rows-auto grid-cols-4  gap-y-10 gap-x-10 max-w-6xl mx-auto  my-8 '>
                         {coins.map((coin)=>{return <CoinCard key={coin.id} coin={coin}/>})}
                   </div>



                   <div className='overflow-x-auto flex gap-3 px-6'>
                        {btns.map((btn,index)=>{return <button className='text-white text-s font-bold bg-black border rounded-md min-w-10 h-10 transition hover:bg-slate-400 '>{index+1}</button>})}
                   </div>


            </div>
      
          
          }

    </div>
  )
}

export default Coins
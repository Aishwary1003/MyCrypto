import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '../index';
import Card from '../components/Card';
import ErrComponent from '../components/ErrComponent';
import Spinner from '../components/Spinner';
const Exchanges = () => {


   const[exchanges,setExchanges]=useState([]);
   const[loading,setLoading]=useState(true);
   const[error,setError]=useState(false);



  useEffect(()=>{
       const fetchData= async ()=>{
        try{
             const res=await axios.get(server) ;
             setExchanges(res.data); 
             setLoading(false);

            }
          catch(error){
                 setError(true);
                       }
                                 };


       fetchData();},[]);

       if(error) return <ErrComponent/>
  return (
    <div className='grid grid-rows-auto grid-cols-4  gap-y-10 gap-x-12 max-w-6xl mx-auto  my-6 '>
            {(loading)?(<Spinner/>):(
                          exchanges.map((e)=>(
                            <Card
                            key={e.id}
                            name={e.name}
                            img={e.image}
                            rank={e.trust_score_rank}
                            url={e.url}
                            />
                        ))           )

            }
       
    </div>
  )
}

export default Exchanges



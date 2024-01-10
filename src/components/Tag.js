import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const apikey = "w1NXH1i2An1StISE5ZC6fZMGeoXPKBHp"

const Tag = () => {
    const [gif , setGif] = useState('');

    const [loading ,setloading] = useState(false);
    const [giftag , setgiftag] = useState('');

 async function fetchdata(){
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=${giftag}`;

    const {data} = await axios.get(url);    // ismei data waala destructuring karke nikaala hai from the data fetched

    const newgif = data.data.images.downsized_large.url;

    setGif(newgif);
    setloading(false);
 }

  useEffect( ()=>{

    fetchdata();
  },[]

  )

  function handleclick(){
    
    fetchdata();
  }

  function handlechange(event){
         setgiftag(event.target.value);
  }


  return (
    <div className=" h-[300px] w-[300px] lg:h-[450px] lg:w-[500px] bg-gradient-to-tr from-orange-400 to-yellow-300 lg:ml-[500px] ml-[44px] mt-[40px] flex flex-col text-center rounded-md">
        <h1 className="font-bold">GENERATE GIFS</h1>

        <div className="flex flex-col items-center justify-center">
            {
                loading ? (<Spinner/>):( <img src={gif}  className=" h-[140px] w-[250px] lg:h-[250px] mt-[30px] lg:w-[450px]"/>)
            }

                
         <input type="text" className=" w-[250px] lg:w-[450px] lg:h-[30px] mt-5 text-center rounded-md" 
         placeholder='  enter gif type here'
         onChange={handlechange}

         value={giftag}

         />

        <button className="text-black relative h-[40px] w-[100px] mt-4  bg-gradient-to-r from-green-300 to-yellow-300 rounded-md border-black border-2 hover:scale-105 transition-all duration-200 font-bold" onClick={handleclick}>Generate</button>

        </div>
     
      
    </div>
  )
}

export default Tag

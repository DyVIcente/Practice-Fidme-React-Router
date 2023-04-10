import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const LoaderTest = () => {

  const tests = useLoaderData();


  return (
    <div className='bg-red-600'>
         {memes.map(meme => (
          <img 
            className='w-[30%] object-contain border-2 gap-4 m-0 rounded-xl border-black bg-white'
            key={meme.id}
            src={meme.image}
            alt={meme.title}
        />
        ))}
    </div>
  )
}

export default LoaderTest;

export const testLoader = async () => {


  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5536577533mshe1b33aa7227b47ep13435ejsn530ce0e67d2e',
        'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
      }
    };

    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)

   response => response.json() 
      
   

    return response.json();
}

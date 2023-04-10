import { useState, useEffect } from 'react';

const Promos = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5536577533mshe1b33aa7227b47ep13435ejsn530ce0e67d2e',
        'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
      }
    };

    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
      .then(response => response.json() )
      
      .then(response => setMemes(response))
      
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='py-20 bg-orange-400'>
      <h1 className='flex justify-center p-10 font-bold text-3xl uppercase pb-20 text-white'>Promos</h1>  

      <div className='flex flex-wrap gap-6 m-auto justify-center'>
        {memes.map(meme => (
          <img 
            className='w-[30%] object-contain border-2 gap-4 m-0 rounded-xl border-black bg-white'
            key={meme.id}
            src={meme.image}
            alt={meme.title}
        />
        ))}
      </div>
    </div>
  );
};

export default Promos;

import React, { useEffect} from 'react';

import Form from '../components/Form';

function handleCallbackResponse(response) {
  console.log("encoded jwt id token" + response.credential);
}


const HomePage = () => {

  useEffect(() => {
    /* gobal google */
    google.accounts.id.initialize({
      client_id: "703509352531-toupm59d2t8cqujqg7bils47390qh70a.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div className='bg-orange-400 pb-20'>
      <h1 className='flex justify-center p-10 font-bold text-3xl uppercase text-white'>Login</h1>

      <Form />

      <p className='flex justify-center'>Ou connectez vous avec Google</p>
      <div id="signInDiv" className='flex justify-center'></div>
    </div>
  )
}

export default HomePage
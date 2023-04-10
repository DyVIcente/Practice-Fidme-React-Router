import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const LoginPage = () => {

  const data = useActionData()

  return (
    <div className='flex flex-col bg-orange-400 pb-20 h-screen'>
      <h1 className='flex justify-center p-10 text-white font-bold text-3xl uppercase pb-20'>Log Form</h1>  

    <div >
      <Form
        className='flex flex-col gap-10  rounded-2xl mx-10 py-10 bg-orange-100'
        method='post'
        action='/login'
      >
        <label>
          <span className='flex justify-center mb-4 font-semibold uppercase '>Votre email:</span>
          <input placeholder='exemple@email.com' type="email" name='email' required className='border-2 border-orange-600 rounded-xl flex mx-auto p-4' />
        </label>

        <label>
          <span className='flex justify-center mb-4 font-semibold uppercase'>Votre mot de passe:</span>
          <input placeholder='*********' type="password" name='mot de passe' required className='border-2 border-orange-600 rounded-xl flex mx-auto p-4' />
        </label>

        <button className='bg-orange-600 mx-auto py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-black'>Submit</button>

      </Form>

      {data && data.error && <p>{data.error}</p>}
      </div>
    </div>
  )
}


export const loginAction = async ({ request }) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    password: data.get('mot de passe')
  }

  console.log(submission);

  // send post request 
  if(submission.password.length < 4 ) {
    return {error: 'Mot de passe trop court'}
  }

  // rediriger l'user 
  return redirect('/promos')


}

export default LoginPage
import React from 'react';
import { useForm } from 'react-hook-form';

const Inscription = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div className='bg-orange-400 h-screen'>

        <h1 className='flex justify-center p-10 font-bold text-3xl text-white'>Inscription</h1>

        <div className='flex justify-center gap-10 mx-auto'>
            <form className="mt-12 flex flex-col gap-8">

                <label className='flex flex-col'>
                    <span className='text-black font-medium mb-4'>Email</span>
                    <input
                        type='email'
                        name="email"
                        placeholder='Adresse Mail'
                        required
                        className='bg-white text-black rounded-lg border-2 py-4 px-6'
                    >
                    </input>
                </label>

                <label className='flex flex-col'>
                    <span className='text-black font-medium mb-4'>Mot de passe</span>
                    <input
                        type='password'
                        name="Mot de passe"
                        placeholder='Votre Mot de passe'
                        required
                        className='bg-white text-black rounded-lg border-2 py-4 px-6'
                    >
                    </input>
                </label>

                <label className='flex flex-col'>
                    <span className='text-black font-medium mb-4'>Confirmation de votre mot de passe</span>
                    <input
                        type='password'
                        name="password"
                        placeholder='Votre Mot de passe'
                        required
                        className='bg-white text-black rounded-lg border-2 py-4 px-6'
                    >
                    </input>
                </label>

                <button
                    type='submit'
                    className='bg-orange-600 mx-auto py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-black'
                >
                    S'inscrire
                </button>

            </form>
        </div>
    </div>
  )
}

export default Inscription
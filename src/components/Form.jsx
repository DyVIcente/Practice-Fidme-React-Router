import React from 'react'

const Form = () => {
  return (
    <div className='mx-20 mb-20'>
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
                        name="mot de passe"
                        placeholder='Votre mot de passe'
                        required
                        className='bg-white text-black rounded-lg border-2 py-4 px-6'
                    >
                    </input>
                </label>
        </form>

    </div>
  )
}

export default Form
import React, { useState } from 'react';

import PhoneImg from '../assets/phone.png';
import AppStore from '../assets/appstore.svg';
import GooglePlay from '../assets/googleplay.png';
import { Navigate } from 'react-router-dom';

const Apropos = () => {

    const [user, setUser] = useState('mario')

    if(!user) {
        return <Navigate to="/" replace={true} />
    }

  return (
    <div className='bg-orange-400 pb-20'>
    <div className='mx-20 mb-10'>
        <h1 className='flex justify-center p-10 font-bold text-3xl uppercase text-white'>A propos</h1>

        <div className='mb-10'>
            <h2 className='flex px-8 py-4 font-bold text-xl text-white'>Quoi que c'est</h2>
            <p className='flex px-8 text-xl text-white'>Fidyou vous permet de retrouver vos preuves d'achats et d'utiliser nos offres de remboursement.</p>
        </div>

        <div>
            <h3 className='flex px-8 py-4 font-bold text-lg text-orange-600 mb-4 uppercase'>Nos services</h3>

            <div className='flex mx-10 gap-4'>
            <img src={PhoneImg}  alt="phone_image" className='w-[10%] object-contain' />

            <p className='text-xl text-white  max-w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magni possimus expedita quis minima nemo, cupiditate dolor officia, quo rerum alias asperiores iusto ipsam similique. Aliquam eveniet voluptatum cupiditate ab.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit fuga repellat molestiae nobis ab illum cumque? Sunt expedita rem omnis laboriosam molestiae iste sint eum amet similique. Expedita, aliquam aperiam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vitae amet aut, neque, dolore tempore, quos vero iusto eos voluptas natus iste! Necessitatibus officia illum omnis fuga eius quos enim.
            </p>
            </div>
        </div>

        <div>
            <h3 className='flex px-8 py-4 font-bold text-lg text-orange-600 mb-4 uppercase'>Comment en profiter</h3>

            <div className='flex mx-10 gap-4'>
            <img src={PhoneImg}  alt="phone_image" className='w-[10%] object-contain' />

            <p className='text-xl text-white  max-w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magni possimus expedita quis minima nemo, cupiditate dolor officia, quo rerum alias asperiores iusto ipsam similique. Aliquam eveniet voluptatum cupiditate ab.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit fuga repellat molestiae nobis ab illum cumque? Sunt expedita rem omnis laboriosam molestiae iste sint eum amet similique. Expedita, aliquam aperiam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vitae amet aut, neque, dolore tempore, quos vero iusto eos voluptas natus iste! Necessitatibus officia illum omnis fuga eius quos enim.
            </p>
            </div>
        </div>

        <div>
            <h3 className='flex px-8 py-4 font-bold text-lg text-orange-600 mb-4 uppercase'>Nos démarches écolo</h3>

            <div className='flex mx-10 gap-4'>
            <img src={PhoneImg}  alt="phone_image" className='w-[10%] object-contain' />

            <p className='text-xl text-white  max-w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magni possimus expedita quis minima nemo, cupiditate dolor officia, quo rerum alias asperiores iusto ipsam similique. Aliquam eveniet voluptatum cupiditate ab.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit fuga repellat molestiae nobis ab illum cumque? Sunt expedita rem omnis laboriosam molestiae iste sint eum amet similique. Expedita, aliquam aperiam?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vitae amet aut, neque, dolore tempore, quos vero iusto eos voluptas natus iste! Necessitatibus officia illum omnis fuga eius quos enim.
            </p>
            </div>
        </div>
    </div>
    <div className='bg-orange-100 w-full flex flex-col'>
    <h4 className='text-center font-bold text-2xl p-4'>Télécharger l'application</h4>
    <div className='flex justify-center gap-8'>
        <img src={AppStore} alt="badge_appstore" className='w-[7%]' />
        <img src={GooglePlay} alt="badge_googleplay" className='w-[7%]' />
    </div>
</div>



    <button className='bg-orange-600 mx-auto py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-black flex justify-center' onClick={() =>setUser(null) }>Logout</button>

</div>
  )
}

export default Apropos
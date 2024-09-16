import React from 'react';
import logo from '../images/elitpro-logo.png';

export default function Home() {
  return (
    <div className="flex items-center justify-between gap-[75px] max-w-[1030px] mx-auto">
      <div className="flex flex-col items-center gap-[8px] w-[50%]">
        <h3 className='text-black font-bold text-2xl text-center'>Найкраще в фотографії те, що вона ніколи не змінюється, навіть якщо люди на ній змінюються.</h3>
        <p className='text-black font-normal text-lg text-center'>Випускний альбом, який створимо разом!</p>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <img src={logo} alt="" width={450} height={450} />
        <a 
            href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer'
            className='
            rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-red-600 px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
            hover:border-black hover:bg-red-600 hover:text-white
            '
        >
            <p>Зв`язатись з нами</p>
        </a>
      </div>
    </div>
  )
}

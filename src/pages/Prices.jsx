import React, { useState } from 'react';
import arrowUp from '../images/arrow-up-svgrepo-com.svg';
import arrowDown from '../images/down-arrow-svgrepo-com.svg';

export default function Prices() {
  const [lightBook, setLightBook] = useState(false);
  const [luxBook, setLuxBook] = useState(false);
  const [maximumBook, setMaximumBook] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
      <h3 className='text-5xl font-medium text-black'>Прайс</h3>
      <div className='flex flex-col gap-[16px] w-full'>
        <div className='flex items-center cursor-pointer justify-between p-[12px] shadow-sm bg-slate-200' onClick={() => setLightBook(prevState => !prevState)}>
          <p className='text-lg font-medium text-gray-700 select-none'>Альбом Light book</p>
          <img src={lightBook ? arrowUp : arrowDown} alt="" width={20} className='select-none' />
        </div>
        <div className={`flex justify-center flex-wrap lg:flex-nowrap items-stretch gap-[16px] p-[10px]  transition-all duration-500 h-0 ${lightBook ? 'h-auto' : 'hidden'}`}>
                <div className="flex flex-col max-w-[300px] self-stretch text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Light book</p>
                    <p className='text-lg font-medium text-gray-800'>750грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>Групова + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Глянцеві сторінки із ламінацією</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>6 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer'
                     className='
                     rounded-[24px] transition duration-300 cursor-pointer  px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '
                  >
                    Замовити
                  </a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Light book</p>
                    <p className='text-lg font-medium text-gray-800'>900грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>2 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Глянцеві сторінки із ламінацією</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>8 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 cursor-pointer  px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Light book</p>
                    <p className='text-lg font-medium text-gray-800'>1050грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Глянцеві сторінки із ламінацією</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>10 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 cursor-pointer  px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Light book</p>
                    <p className='text-lg font-medium text-gray-800'>1250грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Глянцеві сторінки із ламінацією</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 30х30</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>10 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 cursor-pointer px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
        </div>
        <div className='flex items-center cursor-pointer justify-between p-[12px] shadow-sm bg-slate-200' onClick={() => setLuxBook(prevState => !prevState)}>
          <p className='text-lg font-medium text-gray-700 select-none'>Альбом Lux book</p>
          <img src={luxBook ? arrowUp : arrowDown} alt="" width={20} className='select-none' />
        </div>
        <div className={`flex justify-center flex-wrap lg:flex-nowrap items-stretch grow gap-[16px] p-[10px] transition-all duration-500 ${luxBook ? 'h-auto' : 'h-0 hidden'}`}>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Lux book</p>
                    <p className='text-lg font-medium text-gray-800'>850грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>Групова + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові товсті сторінки</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>6 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer'
                    className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '
                  >
                    Замовити
                  </a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Lux book</p>
                    <p className='text-lg font-medium text-gray-800'>1000грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові товсті сторінки</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>8 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Lux book</p>
                    <p className='text-lg font-medium text-gray-800'>1100грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові товсті сторінки</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>10 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Lux book</p>
                    <p className='text-lg font-medium text-gray-800'>950грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>2 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові товсті сторінки</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 30х30</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>6 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Lux book</p>
                    <p className='text-lg font-medium text-gray-800'>1450грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 30х30</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>10 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
        </div>
        <div className='flex items-center cursor-pointer justify-between p-[12px] shadow-sm bg-slate-200' onClick={() => setMaximumBook(prevState => !prevState)}>
          <p className='text-lg font-medium text-gray-700 select-none'>Альбом Maximum</p>
          <img src={maximumBook ? arrowUp : arrowDown} alt="" width={20} className='select-none' />
        </div>
        <div className={`flex justify-center flex-wrap lg:flex-nowrap items-stretch grow gap-[16px] p-[10px] transition-all duration-500 ${maximumBook ? 'h-auto' : 'h-0 hidden'}`}>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Maximum book</p>
                    <p className='text-lg font-medium text-gray-800'>1150грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>Групова + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові сторінки з картонним прошарком</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 30х30</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>6 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer'
                    className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '
                  >
                    Замовити
                  </a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Maximum book</p>
                    <p className='text-lg font-medium text-gray-800'>1450грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові сторінки з картонним прошарком</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 20х30 або 23х23</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>15 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
                <div className="flex flex-col max-w-[300px] self-stretch grow text-center items-center justify-between gap-[50px] px-[35px] py-[60px] border-2 border-solid border-black rounded-[30px]">
                  <div className='flex flex-col items-center gap-[8px]'>
                    <p className='text-3xl font-bold text-black'>Maximum book</p>
                    <p className='text-lg font-medium text-gray-800'>1550грн/люд</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-[40px]'>
                    <div>
                    <p className='text-base font-light text-gray-600'>В ціну входить:</p>
                    <p className='text-base font-light text-gray-600'>Альбом</p>
                    <p className='text-base font-light text-gray-600'>3 Групових + портретна фотосесія</p>
                    <p className='text-base font-light text-gray-600'>Матові сторінки з картонним прошарком</p>
                    <p className='text-base font-light text-gray-600'>Розмір: 30х30</p>
                    </div>
                    <p className='text-base font-light text-gray-600'>10 розворотів</p>
                  </div>
                  <a href="https://t.me/Mykhailo_Pron" target='_blank' rel='noreferrer' className='
                     rounded-[24px] transition duration-300 border-2 border-solid cursor-pointer border-[#f5a339] px-[36px] py-[10px] text-base font-semibold flex items-center gap-[8px]
                     bg-[#f5a339] text-white select-none
                    '>Замовити</a>
                </div>
        </div>
      </div>
    </div>
  )
}

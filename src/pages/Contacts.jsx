import React from 'react';
import pronPhoto from '../images/pron.jpg';
import logo from '../images/elitpro-logo.png';

export default function Contacts() {
  return (
    <div className="flex justify-between gap-[40px] max-w-[930px] mx-auto">
      <div className='max-w-[50%] flex flex-col items-center gap-[20px]'>
        <img src={logo} alt="" width={250} height={250} />
        <p className='text-lg font-medium text-black'>
            Мене звати Михайло, засновник ЕLITEPRO studio. <br />
            Досвідчений фотограф, який фотографує <br />
            та розробляє випускні альбоми. <br />
            Досвід понад 6 років. <br />
            Допоможе втілити в реальність всі ваші ідеї та побажання. <br />
            Понад 50 класів отримали свої альбоми та задоволені роботою! <br />
            З кожним роком все більше і більше масштабуємось. <br />
        </p>
      </div>
      <div className='max-w-[50%] flex flex-col items-center justify-center gap-[80px] mt-[30px]'>
        <img src={pronPhoto} alt="" width={330} height={430} />
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

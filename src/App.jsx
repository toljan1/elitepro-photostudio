import logo from './images/elitpro-logo.png';
import facebookIcon from './images/icons8-facebook.svg';
import instaIcon from './images/icons8-instagram.svg';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import './tailwind.css';
import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';
import InfoPage from './pages/Info';
import PricesPage from './pages/Prices';
import PortfolioPage from './pages/Portfolio';
import menuIcon from './images/menu-svgrepo-com.svg';
import xIcon from './images/x-symbol-svgrepo-com.svg';
import { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
    >
      <Route 
        index
        element={<HomePage />}
      />
      <Route
        path="contacts/"
        element={<ContactsPage />}
      />
      <Route
        path="info"
        element={<InfoPage />}
      />
      <Route
        path="prices"
        element={<PricesPage />}
      />
      <Route
        path="portfolio"
        element={<PortfolioPage />}
      />
    </Route>
  )
);

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="max-w-[1200px] p-[12px] mx-auto relative">
      <header className="flex items-center justify-between gap-[35px] py-[30px] bg-white sticky top-0">
        <a href="/" className={menuIsOpen ? 'hidden' : ''}>
          <img src={logo} alt="" width={70} height={70} onClick={() => setMenuIsOpen(false)} />
        </a>
        <ul className="hidden md:flex items-center justify-between w-full max-w-[720px]">
          <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
            <a href="/portfolio" className='p-[10px]'>Портфоліо</a>
          </li>
          <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
            <a href="/prices" className='p-[10px]'>Ціни {new Date().getFullYear()} - {new Date().getFullYear() + 1}</a>
          </li>
          <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
            <a href="" className='p-[10px]'>Додаткова інформація</a>
          </li>
          <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
            <a href="/contacts" className='p-[10px]'>Контакти</a>
          </li>
        </ul>
        <div className='hidden md:flex items-center gap-[15px]'>
          <a href='' target='_blank' className='rounded-full border border-solid border-black p-[4px]'>
            <img src={facebookIcon} alt="" width={14} height={14} />
          </a>
          <a href='' target='_blank' className='rounded-full border border-solid border-black p-[4px]'>
            <img src={instaIcon} alt="" width={14} height={14} />
          </a>
        </div>
        <img src={menuIcon} alt="" width={40} className={menuIsOpen ? 'hidden' : 'cursor-pointer'} onClick={() => setMenuIsOpen(prevState => !prevState)} />
        {
          menuIsOpen
            ? <div className="flex flex-col gap-[48px] items-center w-full h-full">
                <div className="flex gap-[24px] items-center w-full justify-between p-[12px]">
                  <a href="/">
                    <img src={logo} alt="" width={70} height={70} onClick={() => setMenuIsOpen(false)} />
                  </a>
                  <img src={xIcon} alt="" width={20} className='cursor-pointer' onClick={() => setMenuIsOpen(false)} />
                </div>
                <div className="flex flex-col gap-[24px] items-center">
                  <ul className="flex flex-col gap-[12px] items-center justify-center w-full md:justify-between md:max-w-[720px]">
                    <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
                      <a href="/portfolio" className='p-[10px]'>Портфоліо</a>
                    </li>
                    <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
                      <a href="/prices" className='p-[10px]'>Ціни {new Date().getFullYear()} - {new Date().getFullYear() + 1}</a>
                    </li>
                    <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
                      <a href="" className='p-[10px]'>Додаткова інформація</a>
                    </li>
                    <li onClick={() => setMenuIsOpen(false)} className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-[#f5a339] hover:text-[#f5a339] box-border'>
                      <a href="/contacts" className='p-[10px]'>Контакти</a>
                    </li>
                  </ul>
                  <div className='flex items-center gap-[15px]'>
                    <a href='' target='_blank' className='rounded-full border border-solid border-black p-[4px]'>
                      <img src={facebookIcon} alt="" width={14} height={14} />
                    </a>
                    <a href='' target='_blank' className='rounded-full border border-solid border-black p-[4px]'>
                      <img src={instaIcon} alt="" width={14} height={14} />
                    </a>
                  </div>
                </div>
              </div>
            : null
        }
      </header>
      {
        !menuIsOpen
          ? <>
              <main className='py-[30px]'>
                <RouterProvider router={router} />
              </main>
              <footer className="flex flex-col items-center gap-[30px] pt-[50px]">
                <p className="w-fit mx-auto text-xl text-black font-[450]">Телефонуйте: <a href="tel:0680117140" target='_blank' className='text-gray-600 hover:text-[#f5a339]'>+380 (68) 011 7140</a></p>
                <p className="w-fit mx-auto text-xl text-black font-[450]">Написати нам: <a href="https://t.me/Mykhailo_Pron" target='_blank' className='text-gray-600 hover:text-[#f5a339]'>@Mykhailo_Pron</a></p>
                <p className='text-center text-xl text-black font-semibold'>Правила використання сайту: всі об`єкти визначені на цьому сайті є об`єктом права інтелектуальної власності та його власника і не можуть бути використовувані третіми особами в жодних цілях.</p>
                <p className='text-center text-2xl text-[#f5a339] font-bold'>До уваги читачів: живі фото додаються до всіх альбомів безкоштовно, ціна вказана при тиражі 15+ альбомів</p>
              </footer>
            </>
          : null
      }
    </div>
  );
}

export default App;

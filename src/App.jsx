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
  return (
    <div className="max-w-[1200px] mx-auto relative">
      <header className="flex items-center justify-between gap-[35px] py-[30px] bg-white sticky top-0">
        <a href="/">
          <img src={logo} alt="" width={70} height={70} />
        </a>
        <ul className="flex items-center justify-between w-full max-w-[720px]">
          <li className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-red-700 hover:text-red-700 box-border'>
            <a href="/portfolio" className='p-[10px]'>Портфоліо</a>
          </li>
          <li className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-red-700 hover:text-red-700 box-border'>
            <a href="/prices" className='p-[10px]'>Ціни {new Date().getFullYear()} - {new Date().getFullYear() + 1}</a>
          </li>
          <li className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-red-700 hover:text-red-700 box-border'>
            <a href="" className='p-[10px]'>Додаткова інформація</a>
          </li>
          <li className='relative text-lg text-black font-[450] hover:after:block hover:after:bottom-[-10px] transition-all hover:after:w-full hover:after:absolute hover:after:border-b-2 hover:after:border-red-700 hover:text-red-700 box-border'>
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
      </header>
      <main className='py-[30px]'>
        <RouterProvider router={router} />
      </main>
      <footer className="flex flex-col items-center gap-[30px] pt-[50px]">
        <ul className="flex items-center justify-between w-full max-w-[720px] mx-auto">
          <li className='relative text-xl text-gray-800 font-[350] hover:text-red-700 box-border'>
            <a href="/portfolio" className='p-[10px]'>Портфоліо</a>
          </li>
          <li className='relative text-xl text-gray-800 font-[350]  hover:text-red-700 box-border'>
            <a href="/prices" className='p-[10px]'>Ціни {new Date().getFullYear()} - {new Date().getFullYear() + 1}</a>
          </li>
          <li className='relative text-xl text-gray-800 font-[350] hover:text-red-700 box-border'>
            <a href="" className='p-[10px]'>Додаткова інформація</a>
          </li>
          <li className='relative text-xl text-gray-800 font-[350] hover:text-red-700 box-border'>
            <a href="/contacts" className='p-[10px]'>Контакти</a>
          </li>
        </ul>
        <p className="w-fit mx-auto text-xl text-black font-[450]">Телефонуйте: <a href="tel:0680117140" target='_blank' className='text-gray-600 hover:text-red-700'>+380 (68) 011 7140</a></p>
        <p className="w-fit mx-auto text-xl text-black font-[450]">Написати нам: <a href="https://t.me/Mykhailo_Pron" target='_blank' className='text-gray-600 hover:text-red-700'>@Mykhailo_Pron</a></p>
        <p className='text-center text-xl text-black font-semibold'>Правила використання сайту: всі об`єкти визначені на цьому сайті є об`єктом права інтелектуальної власності та його власника і не можуть бути використовувані третіми особами в жодних цілях.</p>
      </footer>
    </div>
  );
}

export default App;

import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './App.css';
import Home from './components/Home';
import Nearby from './components/Nearby';
import AstronomyPicture from './components/AstronomyPicture';
import NewPlanet from './components/NewPlanet';
import i18next, { changeLanguage } from 'i18next';


function App() {
  const [ t, i18next] = useTranslation();
  const changeLanguage = (language) => {
    i18next.changeLanguage(language)
  }
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language)
  // }
  return (
    <Fragment>
      <div className="App">
        <p className='header'>{t("browser")}</p>
      </div>
      <header className='Nav'>
       <Link className='navList'  to='/home'>{t("home")}</Link>|
       <Link className='navList' to='/asteroids'>{t("nearby")}</Link>|
       <Link className='navList' to='/astronomy'>{t("astronomy")}</Link>|
       <Link className='navList' to='/newplanet'>{t("submit")}</Link>
        <div className='lang'>
        <button className='lngButton' onClick={() => changeLanguage("en")}>EN</button>
        <button className='lngButton' onClick={() => changeLanguage("am")}>ՀՅ</button>
        </div>
      </header>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/asteroids' element={<Nearby/>} />
      <Route path='/astronomy' element={<AstronomyPicture/>} />
      <Route path='/newplanet' element={<NewPlanet/>} />
      </Routes>
      <footer className='copyright'>©2023</footer>
    </Fragment>
  );
}

export default App;

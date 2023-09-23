import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import Home from './components/Home';
import Nearby from './components/Nearby';
import AstronomyPicture from './components/AstronomyPicture';
import NewPlanet from './components/NewPlanet';
import './App.css';


function App() {
  const [ t, i18next] = useTranslation();
  const changeLanguage = (language) => {
    i18next.changeLanguage(language)
  }
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
        <Button type='text' onClick={() => changeLanguage("en")}>EN</Button>
        <Button type='text' onClick={() => changeLanguage("am")}>ՀՅ</Button>
        </div>
      </header>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/asteroids' element={<Nearby t={t} i18next={i18next} />} />
        <Route path='/astronomy' element={<AstronomyPicture t={t}  i18next={i18next}/>} />
        <Route path='/newplanet' element={<NewPlanet t={t}  i18next={i18next}/>} />
      </Routes>
      <footer className='copyright'>©2023</footer>
    </Fragment>
  );
}

export default App;

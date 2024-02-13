import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import WorksPage from './components/worksPage/worksPage';
import BlogPage from './components/blogPage/blogPage';
import ContactPage from './components/contactPage/contactPage';
import Footer from './components/footer/footer';

import WorkDetail from './components/workDetail/workDetail';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/works' Component={WorksPage}/>
        <Route path='/blog' Component={BlogPage}/>
        <Route path='/contact' Component={ContactPage}/>
        <Route path='/workDetail' Component={WorkDetail}/>
      </Routes> 

      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import FeaturedSlider from './Components/FeaturedSlider';
import EditorsSlider from './Components/EditorsSlider';
import Home from './Pages/Home';
import ReviewProcess from './Pages/ReviewProcess';
import ManuscriptPreparation from './Pages/ManuscriptGuideline';
import FAQs from './Pages/FAQs';
import HowToSubmit from './Pages/HowToSubmit';
import ManuscriptPublication from './Pages/ManuscriptPublication';
import Statistics from './Pages/Statistics';
import CopyrightPolicy from './Pages/CopyRightPolicy';
import CitationReports from './Pages/CitationReports';
import Cfp from './Pages/Cfp';
import WhyChoose from './Pages/WhyChoose';
import Contact from './Pages/Contact';
import PublishingStandards from './Pages/PublishingStandards';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Article from './Pages/Article';
import AuthorProfile from './Pages/AuthorProfile';
import Banner from './Components/Banner';
// import NotificationCarousel from './Components/NotificationCarousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      {/* <NotificationCarousel/> */}
      {/* <FlagSection/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/manuscript-Publication' element={<ManuscriptPublication/>} />
        <Route path='/how-to-submit' element={<HowToSubmit/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/why-choose' element={<WhyChoose/>} />
        <Route path='/review-process' element={<ReviewProcess/>} />
        <Route path='/manuscript-preparation' element={<ManuscriptPreparation/>} />
        <Route path='/statistics' element={<Statistics/>} />
        <Route path='/copyright-policy' element={<CopyrightPolicy/>} />
        <Route path='/citation-reports' element={<CitationReports/>} />
        <Route path='/cfp' element={<Cfp/>} />
        <Route path='/authersprofile' element={<AuthorProfile/>} />
        <Route path='/article' element={<Article/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/Publishing-Standards' element={<PublishingStandards/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      <FeaturedSlider/>
      <EditorsSlider/>
     {/* <div>He this is first </div> */}
     <Footer/>
    </div>
  );
}

export default App;

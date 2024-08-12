import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import WhyChoose from './Components/WhyChoose';
import Cfp from './Components/Cfp';
import Home from './Pages/Home';
import Banner from './Components/Banner';
import ReviewProcess from './Pages/ReviewProcess';
import ManuscriptPreparation from './Pages/ManuscriptGuideline';
import FAQs from './Pages/FAQs';
import HowToSubmit from './Pages/HowToSubmit';
import ManuscriptPublication from './Pages/ManuscriptPublication';
import EditorsSlider from './Components/EditorsSlider';
import FeaturedSlider from './Components/FeaturedSlider';
import Statistics from './Pages/Statistics';
import CopyrightPolicy from './Pages/CopyRightPolicy';
import CitationReports from './Pages/CitationReports';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
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

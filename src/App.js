import './App.css';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibilty from './containers/possibility/Possibilty';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import logo from "./logo.png";


function App() {
  return (
    <div className="">
      <div className="gradientBg">
        <Navbar logo={ logo}/>
        <Header/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;

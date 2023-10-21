import React from 'react'

import Navbar from "../../components/navbar/Navbar";
import "./home.css"
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import SimilarProperties from '../../components/similarProperties/SimilarProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';


const  Home = () => {
  return (
    <div> 
      <Navbar/> 
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">See Properties</h1>
        <PropertyList/>
        <h1 className="homeTitle">Our guests also love this </h1>
        <SimilarProperties/>
        <MailList/>
        <Footer/>
        
      </div>
       
      </div>

  );
};

export default Home;
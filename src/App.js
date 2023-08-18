import React from 'react'
import './App.css';
import AboutUs from './componets/AboutUs/AboutUs';
import Header from './componets/Header/Header';
import OurProducts from './componets/OurProducts/OurProducts';
import Sertificate from './componets/Sertificate/Sertificate';
import TextBlock from './componets/TextBlock/TextBlock';
import Form from './componets/Form/Form';


function App() {
  return (
    <div className="App">
      <Header/>
      <TextBlock/>
      <AboutUs/>
      <OurProducts/>
      <Sertificate/>
      <Form/>
    </div>
  );
}

export default App;

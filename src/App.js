import React from 'react'
// import {Article, Brand, Cta} from './components'; //como contenedores?? 
import {Footer,Blog,Possibility,Features,WhatGpt3,Header}from './containers';
import{CTA,Brand,Navbar}from './components';
import './App.css'
const App = ( ) => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
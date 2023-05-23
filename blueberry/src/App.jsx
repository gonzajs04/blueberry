import { useState } from 'react';
import './scss/index.scss';
import Header from './components/Header.jsx';
import Jewelry from './components/Jewelry';
import Opinions from './components/Opinions'
import Declarations from './components/Declarations'
import Metodos from './components/Metodos'
import Types from './components/Types'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header 
      showHeader={true}

    />

    <Jewelry/>

    <Opinions/>

    <Declarations/>

    <Metodos />


    <Types/>
    <Footer/>

    </>
  )
}

export default App

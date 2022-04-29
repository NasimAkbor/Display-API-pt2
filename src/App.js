import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import Header from './components/header.jsx';
import Name from './components/digiName.jsx';
import Name2 from './components/digiName2';
import Image from './components/imageBox';
import Buttons from './components/Buttons';

function App() {
  const [digimon, setDigimon] = useState(false);
  let [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((result) => setDigimon(result));
  }, []);


  function increment() {
    if (slideIndex >= digimon.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((index) => index + 1);
    }
  }

  function decrement() {
    if (slideIndex <= 0) {
      setSlideIndex(digimon.length - 1);
    } else {
      setSlideIndex((index) => index - 1);
    }
  }


  return (
    <div className="mainBox">
      <Header />
      <Name digimon={digimon[slideIndex]} index={slideIndex} />
      <Image digimon={digimon[slideIndex]} index={slideIndex} />
      <Buttons increment={increment} decrement={decrement} />
      <Name2 digimon={digimon[slideIndex]} index={slideIndex} />
    </div>
  )
}

export default App;

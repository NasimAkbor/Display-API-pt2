import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import Header from './components/header.jsx';
import Name from './components/digiName.jsx';
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


  function neverEnding() {
    if (slideIndex === digimon[0].length) {
      slideIndex = 0;
    } else if (slideIndex === -1) {
      slideIndex = digimon[0].length - 1;
    }
  }

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
    </div>
  )
}

export default App;

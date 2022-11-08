import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Tiles from "./components/Tiles";
import Modal from "./components/Modal";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reset, setReset] = useState(0);
  const [modalValue, setModalValue] = useState(null);
  const isMounted = useRef(false);

  const incrementScore = () => {
    setScore((p) => p + 1);
  };

  const toggleModal = (value) => {
    setModalValue(value);
    setShowModal((p) => !p);
  };

  const resetGame = () => {
    setLevel(1);
    setScore(0);
    setReset((p) => p + 1);
    toggleModal();
  };

  const incrementLevel = () => {
    setLevel((p) => p + 1);
  };

  useEffect(() => {
    if (localStorage.bestScore !== undefined) {
      setBestScore(localStorage.bestScore);
    } else {
      localStorage.bestScore = bestScore;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (score >= bestScore) {
        setBestScore(score);
        localStorage.bestScore = bestScore;
      }
    } else {
      isMounted.current = true;
    }
  }, [score, bestScore]);

  return (
    <div className="wrapper">
      <ThemeProvider>
        {showModal ? (
          <Modal value={modalValue} resetGame={resetGame} />
        ) : null}
        {/* <button onClick={() => setLevel((p) => p + 1)}>
          Level
        </button> */}
        <Header level={level} scores={{ score, bestScore }} />
        <Tiles
          level={level}
          incrementScore={incrementScore}
          toggleModal={toggleModal}
          reset={reset}
          incrementLevel={incrementLevel}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;

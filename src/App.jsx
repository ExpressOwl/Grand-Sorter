import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Comparison from "./components/Comparison";
import { formatPrice } from "./utils";
import ScoreDisplay from "./components/ScoreDisplay";
import soundFiles from "./soundFiles";
import MuteButton from "./components/MuteButton";

const baseURL = "https://prices.runescape.wiki/api/v1/osrs/mapping";
const priceURL = "https://prices.runescape.wiki/api/v1/osrs/latest";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore));
    }
  });

  const fetchData = () => {
    axios.get(baseURL).then((res) => {
      const randomItemIndex1 = getRandomInt(0, res.data.length - 1);
      const randomItem1 = res.data[randomItemIndex1];
      setPost1(randomItem1);

      const randomItemIndex2 = getRandomInt(0, res.data.length - 1);
      const randomItem2 = res.data[randomItemIndex2];
      setPost2(randomItem2);

      axios.get(priceURL).then((res) => {
        const price1 = res.data.data[randomItem1.id].high;
        const formattedPrice1 = formatPrice(price1);
        setPrice1(formattedPrice1);

        const price2 = res.data.data[randomItem2.id].high;
        const formattedPrice2 = formatPrice(price2);
        setPrice2(formattedPrice2);
      });
    });
  };

  const handleCorrectAnswer = () => {
    setDisabled(true);
    setScore((prevScore) => prevScore + 1);

    if (score + 1 > highScore) {
      setHighScore(score + 1);
      localStorage.setItem("highScore", score + 1);
    }

    if (!isMuted) {
      const randomIndex = Math.floor(Math.random() * soundFiles.length);
      const randomSound = soundFiles[randomIndex];
      const audio = new Audio(randomSound);
      audio.play();
    }

    setTimeout(() => {
      setDisabled(false);
      fetchData();
    }, 2000);
  };

  const handleWrongAnswer = () => {
    setDisabled(true);
    setScore((prevScore) => prevScore - 2);
    if (!isMuted) {
      let audio = new Audio("/Smite.ogg");
      audio.play();
    }

    setTimeout(() => {
      setDisabled(false);
      fetchData();
    }, 2000);
  };

  if (!post1 || !post2) return null;

  return (
    <>
      <div className="h-screen min-h-[1000px] items-center justify-center bg-black bg-[url(./assets/osrs-bg.jpg)] bg-center bg-repeat-y font-PTSerif">
        <header className="mx-auto mb-10 h-[135px] justify-center bg-[url(./assets/osrs-header.png)] bg-center bg-no-repeat text-center"></header>

        <div className="flex content-evenly justify-center">
          <MuteButton
            isMuted={isMuted}
            onToggleMute={() => setIsMuted((prevMuteState) => !prevMuteState)}
          />

          <ScoreDisplay score={score} highScore={highScore} />
        </div>

        <main className="h-400px relative mx-auto w-[340px] rounded-xl bg-[url(./assets/scroll-backdrop.gif)] bg-center bg-repeat-y lg:w-[600px]">
          <div className="absolute left-0 right-0 top-[-33px] h-[50px] bg-[url(./assets/scroll-top.gif)] bg-contain bg-center bg-no-repeat "></div>
          <Comparison
            item1={post1}
            item2={post2}
            price1={price1}
            price2={price2}
            onCorrectAnswer={handleCorrectAnswer}
            onWrongAnswer={handleWrongAnswer}
            fetchData={fetchData}
            disabled={disabled}
          />
          <div className="absolute bottom-[-31px] left-0 right-0 h-[50px] bg-[url(./assets/scroll-top.gif)] bg-contain bg-center bg-no-repeat"></div>
        </main>
      </div>
    </>
  );
}

export default App;

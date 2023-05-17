import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Comparison from "./components/Comparison";

const baseURL = "https://prices.runescape.wiki/api/v1/osrs/mapping";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const randomItem1 = getRandomInt(0, res.data.length - 1);
      const randomItem2 = getRandomInt(0, res.data.length - 1);
      setPost1(res.data[randomItem1]);
      setPost2(res.data[randomItem2]);
    });
  }, []);

  if (!post1 || !post2) return null;

  return (
    <>
      <Comparison item1={post1} item2={post2} />
    </>
  );
}

export default App;

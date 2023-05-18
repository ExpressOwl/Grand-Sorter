import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Comparison from "./components/Comparison";
import { formatPrice } from "./utils";

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

  useEffect(() => {
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
  }, []);

  if (!post1 || !post2) return null;

  return (
    <>
      <div className="bg-[url(./assets/osrs-bg.jpg)] flex h-screen justify-center items-center bg-center bg-repeat-y bg-black font-runescape">
        <Comparison
          className=''
          item1={post1}
          item2={post2}
          price1={price1}
          price2={price2}
        />
      </div>
    </>
  );
}

export default App;

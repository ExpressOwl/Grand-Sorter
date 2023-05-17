import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "https://prices.runescape.wiki/api/v1/osrs/mapping";
const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

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
      <main>
        <div>
          <h1>{post1.name}</h1>
          <p>{post1.examine}</p>
          <img src={`${iconUrlPrefix}${post1.id}.png`} alt={post1.name} />
        </div>
        <div>
          <h1>{post2.name}</h1>
          <p>{post2.examine}</p>
          <img src={`${iconUrlPrefix}${post2.id}.png`} alt={post2.name} />
        </div>
      </main>
    </>
  );
}

export default App;

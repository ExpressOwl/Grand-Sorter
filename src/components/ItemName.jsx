import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ItemName = (props) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";
  const { post1, post2 } = props

  return (
    <main>
      <div>
        <h1>{post1}</h1>
        <p>{post1}</p>
        <img src={`${iconUrlPrefix}${post1}.png`} alt={post1} />
      </div>
      <span>VS</span>
      <div>
        <h1>{post2.name}</h1>
        <p>{post2.examine}</p>
        <img src={`${iconUrlPrefix}${post2}.png`} alt={post2} />
      </div>
    </main>
  );
};

export default ItemName;

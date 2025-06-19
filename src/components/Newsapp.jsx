import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardcom from "./Cardcom";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "34c4398b9ad4479d8a069f7ff395af90";
  const api = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
  const getData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data.articles);
        const limit = res.data.articles.slice(0, 40);
        setNewsData(limit);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const userInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Live News</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="Tech">
          Tech
        </button>
        <button onClick={userInput} value="nepal">
          Nepal
        </button>
        <button onClick={userInput} value="kashmir">
          Kashmir
        </button>
      </div>

      <div>{newsData ? <Cardcom data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;

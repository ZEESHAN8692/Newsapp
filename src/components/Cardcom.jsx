import React from "react";

const Cardcom = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} />
              <div className="content">
                <a className="title" onClick={() => window.open(curItem.url)}>
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => window.open(curItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cardcom;

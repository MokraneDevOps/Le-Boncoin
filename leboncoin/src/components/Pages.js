import React from "react";
import "./Pages.css";

const Pages = ({ pageTotal, setpageNum, pageNum }) => {
  // Build an array of pages
  const pagesArr = [];
  for (let i = 1; i < pageTotal; i++) {
    pagesArr.push(i);
  }

  return (
    <ul className="pages">
      pages
      {pagesArr.map((i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setpageNum(i);
            }}
            // injection de style direct en balise
            // condition de style en fonction d'un state avec une ternaire
            style={{
              fontSize: pageNum === i ? "30px" : "20px",
              backgroundColor: pageNum === i ? "grey" : "white",
            }}
          >
            {i}
          </li>
        );
      })}
    </ul>
  );
};
export default Pages;
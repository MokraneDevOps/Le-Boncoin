//import libraries
import React, { useState, useEffect } from "react";
import "./Offers.css";
import OffersItem from "../components/OffersItem";
import { Link } from "react-router-dom";
import Pages from "../components/Pages";
import { apiUrl, store_id } from "../config.js";
import axios from "axios";
import SearchBar from "../components/SearchBar.js";

const Offers = () => {
  const [pageNum, setpageNum] = useState(1); //current page
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  //Fecth Data only at first load
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        apiUrl +
          "/product?" +
          "page=" +
          pageNum +
          "&search=" +
          searchTerm +
          "&store_id=" +
          store_id
      );
      setData(response.data);
    };
    fetchData();
  }, [pageNum, searchTerm]);

  return (
    <div>
      <SearchBar
        goSearch={(s) => {
          setSearchTerm(s);
        }}
      />
      <div className="offers">
        {data && (
          <Pages
            pageTotal={data.pageTotal} // pour déterminer le nb d'elements a afficher
            setpageNum={setpageNum} // pour changer la page courante qunand on clique dessus
            pageNum={pageNum} // pour mettre en valeur la page courante
          />
        )}
        {data &&
          data.items.map((item, i) => {
            return (
              <Link to={"/oneoffer/" + item.id} key={i}>
                <OffersItem
                  created_at={item.created_at}
                  photos={item.photos}
                  price={item.price}
                  title={item.title}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Offers;
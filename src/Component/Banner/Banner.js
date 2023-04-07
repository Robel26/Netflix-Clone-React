import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../requests";
import axios from "../../axios";

function Banner() {
  const [bannermovie, setMovie] = useState([]);
  //useEffect feaching
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // function truncate(string, number) {
  //   if (string.length > number) {
  //     return string.substr(0, number - 3) + "...";
  //   } else {
  //     return string;
  //   }
  // }

  // console.log(bannermovie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannermovie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannermovie?.title ||
            bannermovie?.name ||
            bannermovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(bannermovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;

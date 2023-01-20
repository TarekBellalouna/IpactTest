import axios from "axios";
import React, { useEffect, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "qpMAiO2ub0Zzhb0_7LOlPPkBCgdguwz3wvwBgm9Mgp8",
  secret: "3bOnVRREeDGmGSjW2QYbWfftYVWZKgaAz8dSTz0zLP8",
});
export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/images/")
      .then((res) => setPics(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchPhotos = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:8081/api/v1/images/search?word=${query}`)
      .then((res) => setPics(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics?.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.user.username}
              src={pic.urls.small}
              width="50%"
              height="50%"
            ></img>
           <div className="cardInfo direction"> 
            <h1> {pic.user.username}</h1>
            <img
              className="card--image"
              alt={pic.user.username}
              src={pic.user.profile_image.small}
              width="50px"
              height="50px"
            ></img>
            </div>
          </div>
        
         
        ))}
      </div>
    </>
  );
}

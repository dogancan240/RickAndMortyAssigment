import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  let [id, setid] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let characterss = await Promise.all(
        data.characters.map((i) => {
          return fetch(i).then((res) => res.json());
        })
      );
      setResults(characterss);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode: {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Air date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-3">Pick Episodes</h4>
          <InputGroup name="Episode" changeID={setid} total={51} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

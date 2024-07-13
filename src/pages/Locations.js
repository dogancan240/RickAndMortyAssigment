import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Locations = () => {
  let [id, setid] = useState(1);
  let [info, setInfo] = useState([]);
  let { dimension, name } = info;
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let locationss = await Promise.all(
        data.residents.map((i) => {
          return fetch(i).then((res) => res.json());
        })
      );
      setResults(locationss);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Planet: {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Dimension {dimension === "" ? "Unknown" : dimension}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-3">Pick Episodes</h4>
          <InputGroup name="Location" changeID={setid} total={126} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

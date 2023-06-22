import React, { useState, useEffect } from "react";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [regionCode, setRegionCode] = useState([]);

  useEffect(() => {
    requestObservations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestObservations() {
    const res = await fetch(
      `https://api.ebird.org/v2/data/obs/${location}/recent`,
      {
        method: "GET",
        headers: new Headers({
          "x-ebirdapitoken": "epj6fnphl24u",
        }),
      }
    );
    const json = await res.json();
    setRegionCode(json);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestObservations();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Region Code"
          />
        </label>

        <button>Submit</button>
      </form>
      <Results regionCode={regionCode} />
    </div>
  );
};

export default SearchParams;

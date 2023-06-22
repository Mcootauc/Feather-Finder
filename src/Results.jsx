import Region from "./Region";

const Results = ({ regionCode }) => {
  return (
    <div className="search">
      {!regionCode.length ? (
        <h1>No Birds Found</h1>
      ) : (
        regionCode.map((region) => (
          <Region
            comName={region.comName}
            sciName={region.sciName}
            locName={region.locName}
            key={region.sciName}
          />
        ))
      )}
    </div>
  );
};

export default Results;

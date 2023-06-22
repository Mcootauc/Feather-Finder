const Region = ({ sciName, comName, locName }) => {
  return (
    <a href={`/details/${sciName}`} className="pet">
      <div className="info">
        <h1>{comName}</h1>
        <h2>Scientific Name: {sciName}</h2>
        <h3> Location: {locName}</h3>
      </div>
    </a>
  );
};

export default Region;

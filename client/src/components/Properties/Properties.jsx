import "./Properties.css";

const Properties = ({ properties }) => {
  return (
    <ul className="properties">
      {properties.map((property) => (
        <li key={property.id}>
          <Property {...property} />
        </li>
      ))}
    </ul>
  );
};

const Property = ({ img, address, propertyValue, size, beds, baths }) => {
  return (
    <div className="property">
      <div className="property__img-container">
        <img className="property__img" src={img} alt="house image" />
      </div>
      <div className="property__info">
        <h3 className="property__address">{address}</h3>
        <p>Property Value: {propertyValue}</p>
        <p>Size: {size} sq.m.</p>
        <p>Beds: {beds}</p>
        <p>Baths: {baths}</p>
      </div>
    </div>
  );
};

export default Properties;

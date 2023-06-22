import React from "react";

const ProductCard = ({ SKU, name, price, attribute, check }) => {
  return (
    <div className="product-card">
      <input
        type="checkbox"
        onChange={check}
        className="delete-checkbox"
        id={SKU}
      />
      <div>
        {SKU}
        <br></br>
        {name}
        <br></br>
        Price: {price} $<br></br>
        {attribute}
      </div>
    </div>
  );
};

export default ProductCard;

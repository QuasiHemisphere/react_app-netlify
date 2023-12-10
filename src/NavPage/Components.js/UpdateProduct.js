import React, { useState } from "react";

const UpdateProduct = ({
  reveal,
  handleChanges,
  updtLabel,
  updtDesc,
  updtWeight,
  updtWType,
  updtMType,
  updtPieces,
  setUpdtLabel,
  setUpdtDesc,
  setUpdtWeight,
  setUpdtWType,
  setUpdtMtype,
  setUpdtPieces,
  hideSelf,
  handleState,
  updtPrice,
  setUpdtPrice,
  updtSale,
  setUpdtSale,
}) => {
  const [myApp, setMyApp] = useState();
  return (
    <div className="update-form-cont">
      <form
        className="update-form"
        style={{ display: reveal }}
        onSubmit={handleChanges}>
        <div className="input-container">
          <div className="inputs">
            <input
              type="text"
              placeholder="label"
              className="one"
              value={updtLabel}
              onChange={(e) => setUpdtLabel(e.target.value)}
            />
            <input
              type="text"
              placeholder="decription"
              className="two"
              value={updtDesc}
              onChange={(e) => setUpdtDesc(e.target.value)}
            />
            <input
              type="text"
              placeholder="grams"
              className="three"
              value={updtWeight}
              onChange={(e) => setUpdtWeight(e.target.value)}
            />
            <input
              type="text"
              placeholder="grams type"
              className="four"
              value={updtWType}
              onChange={(e) => setUpdtWType(e.target.value)}
            />
            <input
              type="text"
              placeholder="medicine type"
              className="five"
              value={updtMType}
              onChange={(e) => setUpdtMtype(e.target.value)}
            />
            <input
              type="text"
              placeholder="pieces"
              className="five"
              value={updtPieces}
              onChange={(e) => setUpdtPieces(e.target.value)}
            />
            <input
              type="text"
              placeholder="200"
              className="six"
              value={updtPrice}
              onChange={(e) => setUpdtPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="200"
              className="seven"
              value={updtSale}
              onChange={(e) => setUpdtSale(e.target.value)}
            />
          </div>
          <nav className="button-area">
            <button type="submit" onClick={handleState}>
              Save changes
            </button>
          </nav>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;

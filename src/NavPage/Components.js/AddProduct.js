import React, { useState } from "react";

const AddProduct = ({
  revealForm,
  newLabel,
  setNewLabel,
  newDesc,
  setNewDesc,
  newWeight,
  setNewWeight,
  newWghtType,
  setNewWghtType,
  newMedType,
  setNewMedType,
  newPiece,
  setNewPiece,
  handleSubmit,
  setNewBgColor,
  newPrice,
  setNewSales,
  newSales,
  setNewPrice,
}) => {
  function toValidate(e) {
    setNewPiece(e);
    let eToNum = Number(e);
    if (eToNum < 200) {
      setNewBgColor("#EB4D4D");
    } else {
      setNewBgColor("#8AACDE");
    }
  }

  return (
    <form
      className="add-product-form"
      style={{ display: revealForm }}
      onSubmit={handleSubmit}>
      <label for="label">Product Name</label>
      <input
        type="text"
        id="label"
        name="label"
        required
        value={newLabel}
        placeholder="ACETAZOLAMIDE"
        onChange={(e) => setNewLabel(e.target.value)}
      />
      <label for="description">Product Description</label>
      <input
        type="text"
        id="description"
        name="description"
        required
        value={newDesc}
        placeholder="CETAMID"
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <label for="grams">weight</label>
      <input
        type="number"
        id="grams"
        name="grams"
        required
        value={newWeight}
        placeholder="200"
        onChange={(e) => setNewWeight(e.target.value)}
      />
      <label for="gramsType">Weight Type</label>
      <select
        id="gramsType"
        name="gramsType"
        className="select"
        value={newWghtType}
        onChange={(e) => setNewWghtType(e.target.value)}>
        <option value="g">g</option>
        <option value="mg">mg</option>
        <option value="mcg">mcg</option>
        <option value="l">l</option>
      </select>
      <label for="medType">Medicine Type</label>
      <select
        id="type"
        name="medType"
        className="select"
        value={newMedType}
        onChange={(e) => setNewMedType(e.target.value)}>
        <option value="Tablet">tablet</option>
        <option value="Capsule">capsule</option>
        <option value="Vial">vial</option>
        <option value="Suspension">suspension</option>
        <option value="Powder">powder</option>
        <option value="Ampule">ampule</option>
        <option value="Bottle">bottle</option>
        <option value="Pfs">pfs</option>
        <option value="Bag">bag</option>
      </select>
      <label for="pieces">Pieces</label>
      <input
        type="number"
        id="pieces"
        name="pieces"
        required
        value={newPiece}
        placeholder="250"
        onChange={(e) => toValidate(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="100"
        required
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <label htmlFor="sales">Sales</label>
      <input
        type="text"
        placeholder="0"
        name="sales"
        id="sales"
        value={newSales}
        onChange={(e) => setNewSales(e.target.value)}
      />
      <button type="submit" className="subm-btn">
        Add Products
      </button>
    </form>
  );
};

export default AddProduct;

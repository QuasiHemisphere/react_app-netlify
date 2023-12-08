import React, { useState } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const Product = ({ setRecieptHistory }) => {
  const addItem = (
    label,
    description,
    gram,
    gramType,
    type,
    count,
    price,
    sales,
    bgColor
  ) => {
    const genId = products.length ? products[products.length - 1].id + 1 : 1;

    const myNewProducts = {
      genId,
      label,
      description,
      gram,
      gramType,
      type,
      count,
      price,
      sales,
      bgColor,
    };
    const listItem = [...products, myNewProducts];

    setProducts(listItem);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      label: "ACETAZOLAMIDE",
      description: "CETAMID",
      gram: 250,
      gramType: "MG",
      type: "tablet",
      count: 200,
      price: 100,
      bgColor: "#8AACDE",
      sales: 0,
    },
    {
      id: 2,
      label: "ACETYLCYSTEINE",
      description: "ACTEINSAPH",
      gram: 600,
      gramType: "MG",
      type: "Tablet",
      count: 300,
      price: 100,
      bgColor: "#8AACDE",
      sales: 0,
    },
  ]);

  const [reveal, setReveal] = useState("none");

  const [newLabel, setNewLabel] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newWghtType, setNewWghtType] = useState("");
  const [newMedType, setNewMedType] = useState("");
  const [newPiece, setNewPiece] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newSales, setNewSales] = useState("");
  const [newBgColor, setNewBgColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addItem = (
      label,
      description,
      gram,
      gramType,
      type,
      count,
      price,
      sales,
      bgColor
    ) => {
      const genId = products.length ? products[products.length - 1].id + 1 : 1;

      const myNewProducts = {
        genId,
        label,
        description,
        gram,
        gramType,
        type,
        count,
        price,
        sales,
        bgColor,
      };

      const listItem = [...products, myNewProducts];
      setProducts(listItem);
    };
    if (
      !newLabel &&
      !newDesc &&
      !newWeight &&
      !newWghtType &&
      !newMedType &&
      !newPiece &&
      !newPrice &&
      !newSales &&
      !newBgColor
    )
      return;
    setNewLabel("");
    setNewDesc("");
    setNewWeight("");
    setNewWghtType("");
    setNewMedType("");
    setNewPiece("");
    setNewPrice("");
    setNewSales("");
    setNewBgColor("");

    const numWeight = Number(newWeight);
    const numPieces = Number(newPiece);
    const numPrice = Number(newPrice);
    const upperLabel = newLabel.toUpperCase();
    const upperDesc = newDesc.toUpperCase();
    const numSales = Number(newSales);

    addItem(
      upperLabel,
      upperDesc,
      numWeight,
      newWghtType,
      newMedType,
      numPieces,
      numPrice,
      numSales,
      newBgColor
    );
  }

  const [updtLabel, setUpdtLabel] = useState("");
  const [updtDesc, setUpdtDesc] = useState("");
  const [updtWeight, setUpdtWeight] = useState("");
  const [updtWType, setUpdtWType] = useState("");
  const [updtMType, setUpdtMtype] = useState("");
  const [updtPieces, setUpdtPieces] = useState("");
  const [updtId, setUpdtId] = useState("");
  const [updtPrice, setUpdtPrice] = useState("");
  const [alert, setAlert] = useState("#8AACDE");

  function handleState() {
    if (reveal === "none") {
      setReveal("");
      setHideSelf("none");
      setHideBoth("none");
      setHidePlusBtn("none");
    } else {
      setReveal("none");
      setHideSelf("");
      setHideBoth("");
      setHidePlusBtn("");
    }
  }
  function handleUpdate(id) {
    if (hideBoth === "none") {
      setHideBoth("");
      setHidePlusBtn("");
    } else {
      setHideBoth("none");
      setHidePlusBtn("none");
    }
    setUpdtId(id);
    products.map((product) => {
      if (product.id === id) {
        setUpdtLabel(product.label);
        setUpdtDesc(product.description);
        setUpdtWeight(product.gram);
        setUpdtWType(product.gramType);
        setUpdtMtype(product.type);
        setUpdtPrice(product.price);
        setUpdtPieces(product.count);
      }
    });
    handleState();
  }

  function handleUpdatedProduct(
    id,
    label,
    desc,
    gram,
    gramT,
    medT,
    medP,
    price
  ) {
    const listItem = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          label: label,
          description: desc,
          gram: gram,
          gramType: gramT,
          type: medT,
          count: medP,
          price: price,
          sales: 0,
          bgColor: alert,
        };
      } else {
        return product;
      }
    });
    setProducts(listItem);
  }

  function handleChanges(e) {
    e.preventDefault();

    if (
      !updtLabel &&
      !updtDesc &&
      !updtWeight &&
      !updtWType &&
      !updtMType &&
      !updtPieces &&
      !updtId &&
      !updtPrice &&
      !alert
    )
      return;

    setUpdtLabel("");
    setUpdtDesc("");
    setUpdtWeight("");
    setUpdtWType("");
    setUpdtMtype("");
    setUpdtPieces("");
    setUpdtPrice("");
    setUpdtId("");

    const numWeight = Number(updtWeight);
    const numPieces = Number(updtPieces);
    const numPrice = Number(updtPrice);
    const upperLabel = updtLabel.toUpperCase();
    const upperDesc = updtDesc.toUpperCase();

    handleUpdatedProduct(
      updtId,
      upperLabel,
      upperDesc,
      numWeight,
      updtWType,
      updtMType,
      numPieces,
      numPrice
    );
  }
  const [hideSelf, setHideSelf] = useState("none");

  function handleDeleteItem(id) {
    const listItem = products.filter((product) => product.id !== id);
    setProducts(listItem);
  }

  const [display, setDisplay] = useState("none");

  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");
  const [gram, setGram] = useState("");
  const [gramType, setGramType] = useState("");
  const [medType, setMedType] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [def, setDef] = useState();
  // console.log(label);
  // console.log(desc);
  // console.log(gram);
  // console.log(gramType);
  // console.log(medType);
  // console.log(id);
  // console.log(price);
  // console.log(def);

  function addToCart(labels, descriptions, grams, gramTs, type, ids, prices) {
    if (display === "none") {
      setDisplay("");
      setDef("");
    } else {
      setDisplay("none");
    }
    setLabel(labels);
    setDesc(descriptions);
    setGram(grams);
    setGramType(gramTs);
    setMedType(type);
    setId(ids);
    setPrice(prices);
    setDef("");
  }
  const [reciept, setReciept] = useState([]);
  const calculateTotalPrice = () => {
    return reciept.reduce((total, reciepts) => total + reciepts.totPrice, 0);
  };

  const transactionNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };
  const totalPrice = calculateTotalPrice();
  const transactionNumbers = transactionNumber();

  function handleCart(e) {
    e.preventDefault();
    if (display === "none") {
      setDisplay("");
    } else {
      setDisplay("none");
    }
    setDef();

    const addItem = () => {
      const myNewProducts = {
        id,
        label,
        desc,
        gram,
        gramType,
        medType,
        price,
        def,
        totPrice,
      };

      const listItem = [...reciept, myNewProducts];
      setReciept(listItem);
    };
    const defToNum = Number(def);
    let totPrice = price * defToNum;

    addItem(id, label, desc, gram, gramType, medType, price, def, totPrice);
  }

  function handleCancel() {
    if (display === "none") {
      setDisplay("");
    } else {
      setDisplay("none");
    }
    setDef();
  }

  const ListItems = products.map((product) => (
    <section className="section" style={{ background: product.bgColor }}>
      <ul className="card-container">
        <nav className="edit-card">
          <span className="sales">{product.sales} sales</span>
          <i
            className="fa-regular fa-pencil"
            onClick={() => handleUpdate(product.id)}></i>
          <i
            className="fa-regular fa-trash"
            onClick={() => handleDeleteItem(product.id)}></i>
        </nav>
        <li className="card-list">
          <h1 className="card-title">{product.label}</h1>
          <h3 className="card-desc">{product.description}</h3>
          <h4 className="card-grm">
            {product.gram}
            {product.gramType}
          </h4>{" "}
          <h6 className="card-typ">{product.type}</h6>
          <h6 className="card-cnt">{product.count}pcs remaining</h6>
          <h6 className="card-prc">{product.price}php</h6>
        </li>
        <form className="card-form">
          <nav className="counter">
            <i
              className="fa-regular fa-shop count-icon cart card-icon"
              onClick={() =>
                addToCart(
                  product.label,
                  product.description,
                  product.gram,
                  product.gramType,
                  product.type,
                  product.id,
                  product.price
                )
              }></i>
          </nav>
        </form>
      </ul>
    </section>
  ));

  const [revealForm, setRevealForm] = useState("none");
  const [formButton, setFormButton] = useState(
    "fa-regular fa-plus add-prod-icon"
  );
  function handleForm() {
    if (revealForm === "none") {
      setFormButton("fa-regular fa-cancel add-prod-icon");
      setRevealForm("");
      setHideBoth("none");
    } else {
      setRevealForm("none");
      setFormButton("fa-regular fa-plus add-prod-icon");
      setHideBoth("");
    }
  }
  const [hidePlusBtn, setHidePlusBtn] = useState("");
  const [cartBtnPoss, setCartBtnPoss] = useState("180px");
  const [displayShopCart, setDisplayShopCart] = useState("none");
  function handleShopCart() {
    if (displayShopCart === "none") {
      setDisplayShopCart("");
      setHidePlusBtn("none");
      setCartBtnPoss("90px");
    } else {
      setDisplayShopCart("none");
      setHidePlusBtn("");
      setCartBtnPoss("180px");
    }
  }
  const [hideBoth, setHideBoth] = useState("");

  function clearCart() {
    setReciept([]);
  }

  const recieptDate = new Date();
  const dateSave = recieptDate.toString();
  console.log(reciept);

  function handleRecieptSubmit(e) {
    e.preventDefault();
    setRecieptHistory((prevHistory) => [
      ...prevHistory,
      {
        items: reciept,
        total: totalPrice,
        recieptNumber: transactionNumbers,
        recieptDate: dateSave,
      },
    ]);
    clearCart();
  }

  return (
    <div className="prod">
      {products.length ? (
        <section className="search-item">
          <main className="product">{ListItems}</main>
        </section>
      ) : (
        <header className="empty-message">
          <h1>Your product list is empty!</h1>
          <h6>
            Add products here
            <span>
              <i className="fa-regular fa-arrow-right fa-bounce"></i>
            </span>
          </h6>
        </header>
      )}

      <AddProduct
        revealForm={revealForm}
        newLabel={newLabel}
        setNewLabel={setNewLabel}
        newDesc={newDesc}
        setNewDesc={setNewDesc}
        newWeight={newWeight}
        setNewWeight={setNewWeight}
        newWghtType={newWghtType}
        newMedType={newMedType}
        setNewMedType={setNewMedType}
        newPiece={newPiece}
        setNewPiece={setNewPiece}
        setNewWghtType={setNewWghtType}
        handleSubmit={handleSubmit}
        newBgColor={newBgColor}
        setNewBgColor={setNewBgColor}
        handleUpdate={handleUpdate}
        newPrice={newPrice}
        setNewPrice={setNewPrice}
        newSales={newSales}
        setNewSales={setNewSales}
      />
      <section>
        <form
          className="shop-reciept"
          style={{ display: displayShopCart }}
          onSubmit={handleRecieptSubmit}>
          {reciept.length ? (
            <>
              <div className="my-div">
                <header className="cart-header">
                  <h1>Pharmacy Name</h1>
                  <i
                    className="fa-regular fa-arrow-rotate-left"
                    onClick={clearCart}></i>
                </header>

                <h6 className="transaction">
                  Transaction number: {transactionNumbers}
                </h6>

                {reciept.map((reciept) => (
                  <ul className="receipt-container">
                    <li className="receipt-list">
                      <div className="receipt-row">
                        <div className="box">{reciept.id}</div>
                        <div className="receipt-header">
                          <h4 className="r-label">{reciept.label}</h4>
                          <h6 className="r-desc">{reciept.desc}</h6>
                        </div>
                        <div className="receipt-count">
                          <h4>{reciept.def}</h4>
                          <h4>{reciept.totPrice}</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
              <nav className="r-nav">
                <div>
                  <h4>Total: {totalPrice} php</h4>
                </div>
                <button className="r-button">Print Reciept</button>
              </nav>
            </>
          ) : (
            <div className="empty-cart">
              <h1 className="empty-cart-message">
                Currently no items to be listed
              </h1>
            </div>
          )}
        </form>
      </section>
      <section>
        <form
          className="add-to-cart"
          style={{ display: display }}
          onSubmit={handleCart}>
          <div>
            <h6 className="id">Product id: {id}</h6>
            <h5 className="label">{label}</h5>
            <h3 className="desc">{desc}</h3>
            <h6 className="gram">
              {gram}
              {gramType}
            </h6>
            <h6 className="type">{medType}</h6>
            <h6 className="price">{price} pesos</h6>
          </div>
          <div className="count">
            <input
              className="counts"
              type="number"
              name="count"
              id="count"
              placeholder="0"
              required
              autoFocus
              value={def}
              onChange={(e) => setDef(e.target.value)}
            />
          </div>
          <nav>
            <button className="confirm">CONFIRM</button>
            <button className="cancel" onClick={handleCancel}>
              CANCEL
            </button>
          </nav>
        </form>
      </section>
      <UpdateProduct
        reveal={reveal}
        setReveal={setReveal}
        handleUpdate={handleUpdate}
        handleChanges={handleChanges}
        products={products}
        setProducts={setProducts}
        updtLabel={updtLabel}
        updtDesc={updtDesc}
        updtWeight={updtWeight}
        updtWType={updtWType}
        updtMType={updtMType}
        updtPieces={updtPieces}
        hideSelf={hideSelf}
        setHideSelf={setHideSelf}
        setUpdtLabel={setUpdtLabel}
        setUpdtDesc={setUpdtDesc}
        setUpdtWeight={setUpdtWeight}
        setUpdtWType={setUpdtWType}
        setUpdtMtype={setUpdtMtype}
        setUpdtPieces={setUpdtPieces}
        handleState={handleState}
        updtPrice={updtPrice}
        setUpdtPrice={setUpdtPrice}
      />

      <nav>
        <h6 className="cart-count"></h6>
        <i
          className="fa-regular fa-bag-shopping item-cart"
          onClick={handleShopCart}
          style={{ bottom: cartBtnPoss, display: hideBoth }}></i>
        <i
          className={formButton}
          onClick={handleForm}
          style={{ display: hidePlusBtn }}></i>
      </nav>
    </div>
  );
};

export default Product;

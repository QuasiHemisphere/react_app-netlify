import React, { useEffect, useState } from "react";
import LogPage from "./LogInPage/LogPage";
import SwitchTheme from "./Toogle/SwitchTheme";
import "./font-awesome/webfonts/all.css";
import BottomNav from "./LogInPage/Navigation/BottomNav";
import HomePage from "./NavPage/Components.js/HomePage";
import Product from "./NavPage/Components.js/Product";
import RecieptHistory from "./NavPage/Components.js/RecieptHistory";

import Displayer from "./Displayer";
import SearchHistory from "./NavPage/Components.js/SearchHistory";
import Dashboard from "./NavPage/Components.js/Dashboard";
import ChangePassword from "./NavPage/Components.js/ChangePassword";

function App() {
  const [toogle, setToogle] = useState("fa-thin fa-angle-up toogle");
  const [hideAuth, setHideAuth] = useState("none");

  function handleToogle() {
    let dwnToogle = "fa-thin fa-angle-up toogle";
    let upToogle = "fa-thin fa-angle-down toogle";
    if (toogle === upToogle) {
      setToogle(dwnToogle);
      setTimeout(function displayToogle() {
        setHideAuth("none");
      }, 100);
    } else {
      setToogle(upToogle);
      setTimeout(function displayToogle() {
        setHideAuth("");
      }, 100);
    }
  }
  const [txtColor, setTxtColor] = useState("black");
  const [color, setColor] = useState(
    "linear-gradient(135deg, #19293c 0%, #192030 100%)"
  );
  const [bgColor, setBgColor] = useState(
    "linear-gradient(135deg, #c0d3eb 0%, #8998b8 100%)"
  );

  const [navColor, setNavColor] = useState("#C0D3EB");
  const [poss, setPoss] = useState("flex-start");

  function handleSwitch() {
    if (poss === "flex-end") {
      setTimeout(function myFunc() {
        setPoss("flex-start");
        setColor("linear-gradient(135deg, #19293c 0%, #192030 100%)");
        setBgColor("linear-gradient(135deg, #c0d3eb 0%, #8998b8 100%)");
        setTxtColor("black");
        setNavColor("#C0D3EB");
      }, 300);
    } else {
      setTimeout(function myFunc() {
        setColor("linear-gradient(135deg, #c0d3eb 0%, #8998b8 100%)");
        setBgColor("linear-gradient(135deg, #19293c 0%, #192030 100%)");
        setPoss("flex-end");
        setTxtColor("#f2e2e2");
        setNavColor("#19293C");
      }, 300);
    }
  }

  const [numpads, setNumpads] = useState([
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
    {
      id: 6,
      value: 6,
    },
    {
      id: 7,
      value: 7,
    },
    {
      id: 8,
      value: 8,
    },
    {
      id: 9,
      value: 9,
    },
    {
      id: null,
      value: "",
    },
    {
      id: 0,
      value: 0,
    },
  ]);
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("passwordField")) || 123456
  );
  useEffect(() => {
    localStorage.setItem("passwordField", JSON.stringify(password));
  }, [password]);

  const toNum = Number(password);

  const len = toNum.toString();

  let myArray = Object.values(len);
  const fields = myArray.map((field) => (
    <div className="fields" key={field}>
      <div className="innFields"></div>
    </div>
  ));

  const setNumpad = numpads.map((numpad) => (
    <div
      className="numberpad"
      id="keys"
      key={numpad.id}
      onClick={() => handleClick(numpad.id)}>
      {numpad.value}
    </div>
  ));

  const [logIn, setLogIn] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [passHolder, setPassHolder] = useState("");
  const input = new Set([]);

  function handleClick(id) {
    let x = input.add(id);

    let text = "";
    x.forEach(function (value) {
      text += value;
    });

    let textToNumber = Number(text);

    const passLen = password.length;

    if (input.size == passLen && textToNumber !== toNum) {
      input.clear();
      setErrMessage("Opps! Try again");
      setTimeout(function myFunc() {
        setErrMessage("");
      }, 3000);
    } else if (textToNumber === toNum) {
      setErrMessage("Login Verified");

      setTimeout(function myFunc() {
        setLogIn(true);
        setNavIcon("");
        setShowNav("");
      }, 500);
    }
  }

  const [navList, setNavList] = useState([
    {
      id: 1,
      link: "fa-regular fa-bag-shopping icon nv-icon",
      checked: false,
      urls: "#",
      title: "Inventory",
    },
    {
      id: 3,
      link: "fa-regular fa-atom-simple icon setting nv-icon",
      checked: false,
      urls: "#",
    },
    {
      id: 4,
      link: "fa-regular fa-address-card icon nv-icon",
      checked: false,
      urls: "#",
    },
    {
      id: 5,
      link: "fa-regular fa-bars-progress icon nv-icon",
      checked: false,
      urls: "#",
    },
  ]);

  const [showNav, setShowNav] = useState("none");
  const [navIcon, setNavIcon] = useState("none");
  const [reveal, setReveal] = useState("fa-thin fa-angle-down toogle");

  function handleReveal() {
    let dwnToogle = "fa-thin fa-angle-up toogle";
    let upToogle = "fa-thin fa-angle-down toogle";
    if (reveal === upToogle) {
      setTimeout(function displayNav() {
        setReveal(dwnToogle);
      }, 300);
      setTimeout(function displayNav() {
        setShowNav("none");
      }, 300);
    } else {
      setTimeout(function displayNav() {
        setReveal(upToogle);
      }, 300);

      setTimeout(function displayNav() {
        setShowNav("");
      }, 300);
    }
  }

  function callHell() {
    setTimeout(function myFunc() {
      setErrMessage("");
    }, 3000);
  }

  function handleLock() {
    if (logIn === false) {
      setErrMessage("Already logged out");
      setTimeout(function myFunc() {
        setErrMessage("");
      }, 3000);
    } else {
      setTimeout(function myFunc() {
        setLogIn(false);
        setDisplay(<HomePage txtColor={txtColor} />);
        setShowNav("none");
        setNavIcon("none");
        setErrMessage("");
        setTimeout(function myFunc() {
          setErrMessage("Thanks for signing");
          callHell();
        });
      }, 300);
    }
  }

  const [display, setDisplay] = useState(<HomePage txtColor={txtColor} />);

  const [recieptHistory, setRecieptHistory] = useState(
    JSON.parse(localStorage.getItem("receiptStorages")) || []
  );

  useEffect(() => {
    localStorage.setItem("receiptStorages", JSON.stringify(recieptHistory));
  }, [recieptHistory]);

  const [searchHistory, setSearchHistory] = useState("");
  const [productCopy, setProductCopy] = useState([]);

  const receiptHistoryLength = recieptHistory.length;

  const calculateTotalSales = () => {
    return productCopy.reduce((sales, reciepts) => sales + reciepts.sales, 0);
  };
  const calculateTotalItems = () => {
    return productCopy.reduce((items, reciepts) => items + reciepts.count, 0);
  };

  const sales = calculateTotalSales();
  const items = calculateTotalItems();

  function handleNavClick(id) {
    switch (id) {
      case 1:
        setDisplay(
          <>
            <Product
              setRecieptHistory={setRecieptHistory}
              productCopy={productCopy}
              setProductCopy={setProductCopy}
            />
          </>
        );
        break;
      case 3:
        setDisplay(
          <ChangePassword password={password} setPassword={setPassword} />
        );
        break;
      case 4:
        setDisplay(
          <div>
            {recieptHistory.length ? (
              <>
                <RecieptHistory
                  recieptHistory={recieptHistory}
                  History={History}
                />
              </>
            ) : (
              <p className="empty-cart-messages">No history Found</p>
            )}
          </div>
        );
        break;
      case 5:
        setDisplay(
          <Dashboard
            productCopy={productCopy}
            setProductCopy={setProductCopy}
            receiptHistoryLength={receiptHistoryLength}
            sales={sales}
            items={items}
          />
        );
        break;
      default:
      // code block
    }
  }

  return (
    <div className="App" style={{ background: bgColor }}>
      <SwitchTheme
        color={color}
        handleSwitch={handleSwitch}
        poss={poss}
        bgColor={bgColor}
        handleLock={handleLock}
        txtColor={txtColor}
        display={display}
        navColor={navColor}
      />
      {logIn === false ? (
        <LogPage
          toogle={toogle}
          setToogle={setToogle}
          handleToogle={handleToogle}
          hideAuth={hideAuth}
          color={color}
          bgColor={bgColor}
          txtColor={txtColor}
          setTxtColor={setTxtColor}
          setNumpad={setNumpad}
          length={len}
          fields={fields}
          input={input}
          errMessage={errMessage}
          passHolder={passHolder}
          setLogIn={setLogIn}
          setNavIcon={setNavIcon}
          setShowNav={setShowNav}
        />
      ) : (
        <Displayer display={display} />
      )}
      <BottomNav
        navList={navList}
        handleClick={handleClick}
        color={color}
        bgColor={bgColor}
        txtColor={txtColor}
        setTxtColor={setTxtColor}
        showNav={showNav}
        handleReveal={handleReveal}
        reveal={reveal}
        navIcon={navIcon}
        handleNavClick={handleNavClick}
      />
    </div>
  );
}

export default App;

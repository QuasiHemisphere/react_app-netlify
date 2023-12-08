import React, { useState } from "react";

const HomePage = ({ txtColor }) => {
  return (
    <main className="home-page">
      <h1 className="home-page-header" style={{ color: txtColor }}>
        Welcome Back!
      </h1>
      <h3 className="home-page-pr" style={{ color: txtColor }}>
        Start your day with hot Coffee!
      </h3>
    </main>
  );
};

export default HomePage;

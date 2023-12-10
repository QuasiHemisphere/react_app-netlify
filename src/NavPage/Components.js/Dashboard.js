import React from "react";
import Product from "./Product";

const Dashboard = ({ productCopy, receiptHistoryLength, sales, items }) => {
  return (
    <section className="dashboard-container">
      <div className="dashboard-list">
        {" "}
        <h1>+ {productCopy.length}</h1>
        <h4>unique products</h4>
      </div>
      <div className="dashboard-list">
        <h1>+ {receiptHistoryLength}</h1>
        <h4>total receipt</h4>
      </div>
      <div className="dashboard-list">
        <h1>+ {sales}</h1>
        <h4>total sales</h4>
      </div>
      <div className="dashboard-list">
        <h1>+ {items}</h1>
        <h4>total items</h4>
      </div>
    </section>
  );
};

export default Dashboard;

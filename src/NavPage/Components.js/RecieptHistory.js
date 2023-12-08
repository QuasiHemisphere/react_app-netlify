import React from "react";
import { useState } from "react";

const RecieptHistory = ({ recieptHistory }) => {
  function History() {
    return (
      <div className="history-container">
        <ul className="history-tab">
          {recieptHistory.map((history, index) => (
            <li key={index} className="history-list">
              <div className="receipt-header">
                <h6>Transaction number: {history.recieptNumber}</h6>
                <h6>Date: {history.recieptDate}</h6>
              </div>
              <div className="list-holder-ht">
                {history.items.map((item, index) => (
                  <li key={index} className="history-item-list">
                    <h5 className="item-id">{item.id}</h5>
                    <div className="history-dc">
                      <h5>{item.label}</h5>
                      <h6>{item.desc}</h6>
                    </div>
                    <div className="history-end">
                      <h6>{item.gram}grm</h6>
                      <h6>{item.price}php</h6>
                      <h6>{item.def}pcs</h6>
                      <h6>{item.totPrice} </h6>
                    </div>
                  </li>
                ))}
              </div>

              <div className="history-grand-total">
                <h6>Grand total: {history.total} php </h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <History />
    </div>
  );
};

export default RecieptHistory;

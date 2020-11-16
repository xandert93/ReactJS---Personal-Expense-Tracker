import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  let emptyStr = "";
  const [description, setDescription] = useState(emptyStr);
  const [amount, setAmount] = useState(emptyStr);

  const submitTransaction = (e) => {
    e.preventDefault();
    if (description.trim() === emptyStr || amount.trim() === emptyStr) {
      alert("Please detail your transaction");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        description,
        amount: +amount,
      };

      addTransaction(newTransaction);
      setDescription(emptyStr);
      setAmount(emptyStr);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label>
            Transaction:
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter transaction description..."
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Amount:
            <input
              className={
                amount === emptyStr
                  ? null
                  : amount[0] === "-"
                  ? "minus"
                  : "plus"
              }
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              step=".01"
              placeholder="Enter amount..."
            />
          </label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

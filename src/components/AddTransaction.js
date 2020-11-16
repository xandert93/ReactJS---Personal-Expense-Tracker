import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const submitTransaction = (e) => {
    e.preventDefault();
    if (description.trim() === "" || amount.trim() === "") {
      alert("Please detail your transaction");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        description,
        amount: +amount,
      };

      addTransaction(newTransaction);
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
                amount === "" ? null : amount[0] === "-" ? "minus" : "plus"
              }
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
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

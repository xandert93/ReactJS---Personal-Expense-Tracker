import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let { id, description, amount } = transaction;
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {description}
      <span>
        {sign}£{Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;

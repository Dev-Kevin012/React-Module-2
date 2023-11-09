import React from "react";
import { useAppContext } from "../hooks/useAppContext";

const Expenses = () => {
  const { expenses, setExpenses } = useAppContext();

  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  if (expenses.length > 0) {
    return (
      <div className="overflow-x-auto md:w-[50%] mx-auto my-5">
        <table className="table table-sm table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{expense.name}</th>
                <th>{expense.amount}</th>
                <th>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(i)}
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Expenses;

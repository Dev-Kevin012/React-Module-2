import React, { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

const Expenses = () => {
  const { expenses, setExpenses } = useAppContext();
  const [filterTerm, setFilterTerm] = useState("");

  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  if (expenses.length > 0) {
    return (
      <div className="md:w-[50%] mx-auto my-2 flex flex-col items-center gap-3">
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Search Expenses"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />
        <table className="table table-sm table-zebra mb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{expense.name}</th>
                <th>{expense.amount}</th>
                <th>{expense.date}</th>
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

import React, { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { expenses, setExpenses } = useAppContext();
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (data) => {
    data.id = uuidv4();
    setExpenses([...expenses, data]);
    reset();
    changeState();
  };

  const changeState = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="flex w-full justify-center p-4">
      <div className="card w-96 bg-base-200 shadow-md">
        {showForm ? (
          <form
            className="card-body items-center text-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Expense Item"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full max-w-xs"
              {...register("amount")}
              required
            />
            <input
              type="date"
              placeholder="Date"
              className="input input-bordered w-full max-w-xs"
              {...register("date")}
              required
            />
            <div className="flex justify-around w-full">
              <button className="btn btn-accent normal-case">
                Add Expense
              </button>
              <button
                className="btn btn-error normal-case"
                onClick={changeState}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="flex justify-center p-4">
            <button
              className="btn btn-primary normal-case"
              onClick={changeState}
            >
              Add New Expense
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

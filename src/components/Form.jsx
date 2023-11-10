import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { expenses, setExpenses } = useAppContext();

  const onSubmit = (data) => {
    data.id = uuidv4();
    setExpenses([...expenses, data]);
    reset();
  };

  return (
    <div className="flex w-full justify-center p-4">
      <div className="card w-96 bg-base-100 shadow-md">
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
          <button className="btn btn-primary">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

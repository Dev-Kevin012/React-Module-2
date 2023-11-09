import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { expenses, setExpenses } = useAppContext();

  const onSubmit = (data) => {
    setExpenses([...expenses, data]);
    reset();
  };
  return (
    <div className="flex w-full justify-center p-4">
      <div className="card w-96 bg-base-100 shadow-md">
        <form
          className="card-body items-center text-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Expense Item"
            className="input input-bordered w-full max-w-xs"
            {...register("name")}
          />
          <input
            type="number"
            placeholder="Amount"
            className="input input-bordered w-full max-w-xs"
            {...register("amount")}
          />
          <button className="btn btn-primary">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

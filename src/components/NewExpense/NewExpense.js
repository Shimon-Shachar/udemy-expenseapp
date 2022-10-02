import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = (props) => {
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsEditing(true);
  };    
  const cancelHandler = () => {
    setIsEditing(false)
  }  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;


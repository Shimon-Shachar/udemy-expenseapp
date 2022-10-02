import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredArray = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialDropDown={filteredYear}
          onSelectYear={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredArray}/>
        <ExpensesList expenses={filteredArray}/>  
      </Card>
    </div>
  );
};

export default Expenses;

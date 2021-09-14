import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
    const [enteredYear, setEnteredYear] = useState('2021');

    const changeYearHandler = (year) => {
        setEnteredYear(year);
        console.log(year);
    };

    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onYearChange={changeYearHandler} />
            <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            ></ExpenseItem>
        </Card>
        </div>
    );
}

export default Expenses;

import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // useState will ALWAYS return two elements
    const [title, setTitle] = useState(props.title); // first elem in array is a pointer to props.title and second elem is a function in order to change the elem that is pointed to

    function clickHandler() {
        setTitle('UPDATED'); // will update the elem and also change the component dynamically
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

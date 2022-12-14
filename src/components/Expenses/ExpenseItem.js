import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  //const [현재 상태값, 업데이트하는 함수] = useState(초기값)
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price"> ${props.amount} </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // Lấy tên tháng từ thuộc tính date của props và chuyển đổi sang chuỗi bằng tiếng Anh (Mỹ), dạng đầy đủ (ví dụ: January, February)
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // Lấy ngày từ thuộc tính date của props và chuyển đổi sang chuỗi bằng tiếng Anh (Mỹ), dạng 2 chữ số (ví dụ: 01, 02)
  const year = props.date.getFullYear();
  console.log(day);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

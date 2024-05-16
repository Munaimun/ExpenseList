import React from "react";

//defining the shape of props
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
//functional component passing with props
const ExpenseList = ({ expenses, onDelete }: Props) => {
  //remove the table if there is no expense
  if (expenses.length === 0) return null;

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the object from the props to show in the UI */}
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td> {expense.description} </td>
              <td> {expense.amount} </td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  // pass the id to handle the delete function
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {/* reduce method for total amount */}$
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;

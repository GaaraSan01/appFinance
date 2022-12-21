import { useState, useEffect } from "react"
import Header from '../components/header'
import Resume from "../components/resume"
import Form from "../components/form"


export default function App() {
  const [Income, setIncome] = useState(0)
  const [Expense, setExpense] = useState(0)
  const [Total, setTotal] = useState(0)

  const data = localStorage.getItem("transactions")
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  )

  useEffect(() => {
    const amountExpense = transactionList
    .filter((item) => !item.options)
    .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionList
    .filter((item) => item.options)
    .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0)

    const total = income < expense ?  Number(income - expense ) : Number(income - expense )

    setIncome(income)
    setExpense(expense)
    setTotal(total)
  }, [transactionList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <div>
      <Header />
      <Resume income={Income} expense={Expense} total={Total}/>
      <Form 
        handleAdd={handleAdd} 
        transactionList={transactionList}
        setTransactionList={setTransactionList}
      />
    </div>
  )
}



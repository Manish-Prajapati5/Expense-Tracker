import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map(transactions => transactions.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className='inc-exp-container rounded-lg bg-linear-to-r hover:bg-linear-to-r transition duration-300 hover:bg-black/80 hover:to-blue-500/80 bg-blue-500/80 to-black/80'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
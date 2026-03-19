import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transaction } = useContext(GlobalContext)

  const amount = transaction.map(transactions => transactions.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div>
      <h1 className='text-3xl '>Expense Traker</h1>
      <h4>Your Balance</h4>
      <h1 className='text-3xl' id='balance'>${total}</h1>
    </div>
  )
}

export default Balance
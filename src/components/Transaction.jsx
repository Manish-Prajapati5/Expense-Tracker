import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <li className={`bg-linear-to-r hover:bg-linear-to-r transition duration-300 hover:bg-black/80 hover:to-blue-500/80 bg-blue-500/80 to-black/80 py-2 flex justify-between items-center my-2 px-2 rounded-lg   ${transaction.amount > 0 ? "plus" : "minus"}`}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button
                onClick={() => deleteTransaction(transaction.id)}
                className=' w-5 h-5 flex delete-btn text-sm hover:scale-120 rounded-xl pb-1 justify-center items-center active:bg-red-700 cursor-pointer  text-center bg-red-500 opacity-0 transition-opacity-1 duration-200'>x</button>
        </li>
    )
}

export default Transaction
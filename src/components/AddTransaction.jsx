import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new Trancsaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-contrtol'>
                    <label htmlFor="text">Text</label>
                    <input
                        className='w-full border rounded-lg'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount  <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        className='w-full border rounded-lg'
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        type="number"
                        placeholder='Enter amount...' />
                </div>
                <button className='btn rounded-3xl text-xl hover:scale-105 transition duration-200 shadow-2xl    shadow-blue-500 bg-linear-to-r bg-blue-500/80 to-black/80 hover:bg-linear-to-r hover:bg-black/80 hover:to-blue-500/80'>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
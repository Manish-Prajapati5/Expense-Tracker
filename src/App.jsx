import React from 'react'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


const App = () => {
    return (
        <GlobalProvider>
            <div className='container   max-h-fit shadow-xl drop-shadow-2xl shadow-blue-400 bg-linear-to-r bg-black/80 to-blue-500/80'>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default App
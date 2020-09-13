import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.packbacktime < 0 ? '-' : '+';
    return (


        <li className={transaction.packbacktime < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}£{Math.abs(transaction.packbacktime)}</span><button
                onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>



    )
}

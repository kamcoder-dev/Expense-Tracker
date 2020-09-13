import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.packbacktime);

    const total = amounts.reduce((acc, item) => (acc = item), 0).toFixed(2)

    return (
        <>
            <h4>Pack Back Time</h4>
            <h1>{total} Years</h1>

        </>
    )
}

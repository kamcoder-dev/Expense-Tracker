import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Years = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.cost);

    const total = amounts.reduceRight((acc, item) => (acc = item), 0).toFixed(2)

    return (
        <>
            <h4>Cost</h4>
            <h1>{total} Years</h1>

        </>
    )
}

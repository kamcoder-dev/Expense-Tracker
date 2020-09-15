import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Money = () => {
    const { costs } = useContext(GlobalContext);

    const amounts = costs.map(costs => costs.cost);

    const total = amounts.reduceRight((acc, item) => (acc = item), 0).toFixed(2)

    return (
        <>
            <h4>Cost</h4>
            <h1>{total} Years</h1>

        </>
    )
}

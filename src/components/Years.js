import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Years = () => {
    const { times } = useContext(GlobalContext);

    const amounts = times.map(times => times.packbacktime);

    const total = amounts.reduceRight((acc, item) => (acc = item), 0).toFixed(2);

    return (
        <>
            <h4>Pack Back Time</h4>
            <h1>{total} Years</h1>
        </>
    )
}

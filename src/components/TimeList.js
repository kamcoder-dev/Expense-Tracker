import React, { useContext } from 'react'
import { Time } from './Time';
import { GlobalContext } from '../context/GlobalState';

export const TimeList = () => {
    const { times } = useContext(GlobalContext);


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {times.map(time => (<Time key={time.id} time=
                    {time} />))}

            </ul>

        </>
    )
}

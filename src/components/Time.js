import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const Time = ({ time }) => {

    const { deleteTime } = useContext(GlobalContext)
    const sign = time.packbacktime < 0 ? '-' : '+';
    return (


        <li className={time.packbacktime < 0 ? 'minus' : 'plus'}>
            {time.text} <span>{sign}£{Math.abs(time.packbacktime)}</span><button
                onClick={() => deleteTime(time.id)} className="delete-btn">x</button>
        </li>



    )
}

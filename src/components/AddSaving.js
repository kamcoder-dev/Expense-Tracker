import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddSaving = () => {
    const [cost, setCost] = useState(0);
    const [investment, setInvestment] = useState(0);
    const [investmentlifetime, setInvestmentLifeTime] = useState(0);
    const [runningcosts, setRunningCost] = useState(0);
    const [energy, setEnergy] = useState(0);



    const { addSaving } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newSaving = {
            id: Math.floor(Math.random() * 10000000),
            investment,
            investmentlifetime,
            runningcosts,
            cost: ((investment / investmentlifetime) + runningcosts) * (1 / energy),
            energy,

        }

        addSaving(newSaving);
    }


    return (
        <div>
            <h3>Add Saving</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="investment">Investment</label>
                    <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="Enter Investment Value..." />
                </div>
                <div className="form-control">
                    <label htmlFor="investmentlifetime">investment lifetime (years)</label>
                    <input type="number" value={investmentlifetime} onChange={(e) => setInvestmentLifeTime(e.target.value)} placeholder="Enter Investment Life Time Value..." />
                </div>
                <div className="form-control">
                    <label htmlFor="runningcosts">average annual running costs (1/year)</label>
                    <input type="number" value={runningcosts} onChange={(e) => setRunningCost(e.target.value)} placeholder="Enter Average Annual Running Costs Value..." />
                </div>
                <div className="form-control">
                    <label htmlFor="energy">energy produced or saved per year (kWh/year)</label>
                    <input type="number" value={energy} onChange={(e) => setEnergy(e.target.value)} placeholder="Enter Energy Produced Value..." />
                </div>



                <button className="btn">Generate</button>
            </form>
        </div>



    )
}

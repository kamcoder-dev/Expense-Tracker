import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import './AddTime.css'
import {
    Button,
    Container,
    Checkbox,
    Form,
    Icon,
    Radio,
    Select,
    TextArea,
    Header,
    Grid
} from 'semantic-ui-react'


export const AddTime = () => {
    const [investment, setInvestment] = useState(0);
    const [annualnetincome, setAnnualNetIncome] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [cost, setCost] = useState(0);
    const [packbacktime, setPackBackTime] = useState(0);



    const { addTime } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTime = {
            id: Math.floor(Math.random() * 10000000),
            investment,
            cost,
            energy,
            packbacktime: investment / (cost * energy),
        }

        addTime(newTime);
    }


    return (
        <div centered>


            <Form onSubmit={onSubmit} >
                <Form.Group widths="equal">

                    <Form.Field>
                        <label htmlFor="investment">Investment</label>
                        <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="Enter Investment Value..." />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="cost">Cost or savings per energy unit (1/kWh)</label>
                        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter Cost Value..." />
                    </Form.Field>



                    <Form.Field  >
                        <label htmlFor="energy">Energy produced or saved per year (kWh/year)</label>
                        <input type="number" value={energy} onChange={(e) => setEnergy(e.target.value)} placeholder="Enter Energy Value..." />

                    </Form.Field>
                    <br />


                    <Button color='linkedin'>
                        Generate
    </Button>
                </Form.Group>
            </Form>



        </div >



    )
}

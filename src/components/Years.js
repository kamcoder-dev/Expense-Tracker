import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import {
    Button,
    Container,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    Segment,
    Header,
    Icon,
    Statistic,
    Grid
} from 'semantic-ui-react'

export const Years = () => {
    const { times } = useContext(GlobalContext);

    const amounts = times.map(times => times.packbacktime);

    const total = amounts.reduceRight((acc, item) => (acc = item), 0).toFixed(2);

    return (

        <>

            <Grid columns={7} centered>
                <Grid.Column>
                    <Header as='h2'>

                        <Header.Content>Payback Time</Header.Content>


                        <Statistic>
                            <Statistic.Value>{total}</Statistic.Value>
                            <Statistic.Label>Years</Statistic.Label>
                        </Statistic>
                    </Header>
                </Grid.Column>
            </Grid>



        </>

    )
}

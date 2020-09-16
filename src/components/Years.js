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
    TextArea,
    Header,
    Icon
} from 'semantic-ui-react'

export const Years = () => {
    const { times } = useContext(GlobalContext);

    const amounts = times.map(times => times.packbacktime);

    const total = amounts.reduceRight((acc, item) => (acc = item), 0).toFixed(2);

    return (

        <Container>
            <Header as='h2'>
                <Icon name='time' />
                <Header.Content>
                    Pay Back Time
            <Header.Subheader>{total} Years</Header.Subheader>
                </Header.Content>
            </Header>
        </Container>
    )
}

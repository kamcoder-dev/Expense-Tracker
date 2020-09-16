import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

export const HeaderTime = () => {
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='envira' circular />
                <Header.Content> Renewable Energy - Payback Time Calculator</Header.Content>
            </Header>
        </div>
    )
}

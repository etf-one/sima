import React from 'react'
import {Button, Container, Image, Menu, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default() => (
        <div>
            <Segment
                inverted
                textAlign='center'
                style={{ // minHeight: 700, 
                padding: '1em 0em' }}
                vertical>
                <Container>
                    <Menu inverted secondary size='large'>
                        <Menu.Item
                            
                            style={{
                            
                        }}>
                            <Link to="/">
                                <Image
                                    size='mini'
                                    src='/logo.png'
                                    style={{
                                    marginRight: '1.5em',
                                    'float':'left',
                                    
                                }}/>
                                <span style={{ 'fontSize': '180%' }}>ETF ONE</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            position='right'
                            style={{
                            'verticalAlign': 'text-top'
                        }}>
                            <Link to="/login">
                                <Button inverted>Log In</Button>
                            </Link>

                            <Link to="/signup">
                                <Button
                                    inverted
                                    style={{
                                    marginLeft: '0.5em'
                                }}>Sign Up</Button>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Container>
            </Segment>
        </div>
)
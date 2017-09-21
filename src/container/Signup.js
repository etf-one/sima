import React, {Component} from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
    Divider
} from 'semantic-ui-react'
import './signup.css'
import 'whatwg-fetch'

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(res => { console.log(res)})
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({[name]: value})
        console.log(this.state)
    }

    render() {
        return (
            <div className='login-form'>
                <Grid
                    textAlign='center'
                    style={{
                    height: '100%'
                }}
                    verticalAlign='middle'>
                    <Grid.Column
                        style={{
                        maxWidth: 450
                    }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png'/> {' '}Sign up a new account
                        </Header>
                        {/* todo validation*/}
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    name='email'
                                    fluid
                                    placeholder='E-mail address'
                                    label='Email'
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required/>
                                <Form.Input
                                    name='password'
                                    fluid
                                    type='password'
                                    placeholder='Password'
                                    label='Password'
                                    onChange={this.handleInputChange}
                                    required/>
                                <Form.Input
                                    fluid
                                    type='password'
                                    placeholder='Confirm Password'
                                    label='Confirm Password'
                                    required/>
                                <Divider/>
                                <Form.Input
                                    name='firstName'
                                    placeholder='First Name'
                                    type='First Name'
                                    label='First Name'
                                    onChange={this.handleInputChange}
                                    required/>
                                <Form.Input
                                    name='lastName'
                                    placeholder='Last Name'
                                    type='Last Name'
                                    label='Last Name'
                                    onChange={this.handleInputChange}
                                    required/>

                                <Button onClick={(e) => this.handleSubmit(e)} color='teal' fluid size='large'>Submit</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

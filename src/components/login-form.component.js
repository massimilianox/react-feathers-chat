import React, { Component } from 'react';
import { Form, Grid, Button, Segment } from 'semantic-ui-react'

function LoginFormComponent({ submit, message }) {

  return (
    <Segment placeholder>
      <Grid columns={1} relaxed='very' stackable>
        <Grid.Column>
          <div style={{ textAlign: 'center', padding: '10px' }}>
          { message ?
            <span className="error">{ `${message}` }</span> :
            <span>Log in or Sing Up</span> }
          </div>
          <Form>
            <Form.Input icon='mail' iconPosition='left' label='Username' type='email' placeholder='email' />
            <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='password' />
            <div style={ {textAlign: 'center'} }>
              <Button.Group>
                <Button id='login' basic content='Login' color="olive" icon='user' type='submit' onClick={ submit } />
                <Button.Or />
                <Button id='signup' basic primary content='Sign up' icon='signup' type='submit' onClick={ submit } />
              </Button.Group>
            </div>
          </Form>

        </Grid.Column>
      </Grid>
    </Segment>
  );

}

export default LoginFormComponent
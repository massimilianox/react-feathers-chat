import React, { Component } from 'react';
import { Form, Grid, Button, Segment } from 'semantic-ui-react'
// import { connect } from 'react-redux'

// import { login, singup } from '../actions/login.actions'


class LoginFormComponent extends Component {

  // // Retrive email and password
  // getCredential() {
  //   if (document.querySelector('[type="email"]').value && document.querySelector('[type="password"]').value) {
  //     return {
  //       email: document.querySelector('[type="email"]').value,
  //       password: document.querySelector('[type="password"]').value
  //     }
  //   } else {
  //     return null
  //   }
  // }

  // onSubmit = ev => {
  //   const credential = this.getCredential()
  //   credential && this.props[ev.target.id](credential)
  // }

  render() {
    return (
      <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <div style={{ textAlign: 'center', padding: '10px' }}>
            { this.props.message ?
              <span className="error">{ `${this.props.message}` }</span> :
              <span>Log in or Sing Up</span> }
            </div>
            <Form>
              <Form.Input icon='mail' iconPosition='left' label='Username' type='email' placeholder='email' />
              <Form.Input icon='lock' iconPosition='left' label='Password' type='password' placeholder='password' />
              <div style={ {textAlign: 'center'} }>
                <Button.Group>
                  <Button id='login' basic content='Login' color="olive" icon='user' type='submit' onClick={ this.props.submit } />
                  <Button.Or />
                  <Button id='singup' basic primary content='Sign up' icon='signup' type='submit' onClick={ this.props.submit } />
                </Button.Group>
              </div>
            </Form>

          </Grid.Column>
        </Grid>
      </Segment>
    );
  }

}

export default LoginFormComponent
/**
 * Map state to props and inject login's actions
 */
// export default connect( state => {
//   return {
//     loading: state.login.loading,
//     message: state.login.message
//   }
// }, { login, singup })(LoginFormComponent)
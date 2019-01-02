import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import LoginFormComponents from '../components/login-form.component'
import { login, signup } from '../actions/login.actions'


class LoginPage extends Component {

  componentWillMount() {
    this.props.login()
  }

  // Retrive email and password
  getCredential() {
    if (document.querySelector('[type="email"]').value && document.querySelector('[type="password"]').value) {
      return {
        email: document.querySelector('[type="email"]').value,
        password: document.querySelector('[type="password"]').value
      }
    } else {
      return null
    }
  }

  onSubmit = ev => {
    const credential = this.getCredential()
    credential && this.props[ev.target.id](credential)
  }

  render() {
    return (
      <div>

        { this.props.authenticated && <Redirect to='/chat' /> }

        <LoginFormComponents
          submit={ this.onSubmit }
          message={ this.props.message } />

      </div>
    );
  }
}

/**
 * Map state to props and inject login's actions
 */
export default connect( state => {
  return {
    loading: state.login.loading,
    message: state.login.message,
    authenticated: state.login.authenticated
  }
}, { login, signup })(LoginPage)
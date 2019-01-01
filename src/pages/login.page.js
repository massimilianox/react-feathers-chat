import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import LoginFormComponents from '../components/login-form.component'
import { login, singup } from '../actions/login.actions'


class LoginPage extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     redirect: false
  //   }
  // }

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

  // logout = ev => {
  //   this.props.logout()
  // }

  render() {
    return (
      <div>
        {
          this.props.redirect ?
          <Redirect to='/chat' /> :
          <LoginFormComponents
            submit={ this.onSubmit } />
        }
      </div>
    );
  }
}

// export default LoginPage;
/**
 * Map state to props and inject login's actions
 */
export default connect( state => {
  return {
    loading: state.login.loading,
    message: state.login.message,
    redirect: state.login.redirect
  }
}, { login, singup })(LoginPage)
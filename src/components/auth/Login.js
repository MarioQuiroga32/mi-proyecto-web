import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'
import { withAuthConsumer } from '../../contexts/AuthStore';
import Register from './Register'

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email pattern';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }
    return message;
  }
}

class Login extends Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      authService.authenticate(this.state.user)
        .then(
          (user) => {
            this.setState({ isAuthenticated: true }, () => {
              this.props.onUserChange(user);
            })
          },
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                password: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { isAuthenticated, errors, user, touch } =  this.state;

    if (isAuthenticated) {
      return (<Redirect to="/home" />)
    }

    return (
    
      <div className="login">
      <div className="left-login"></div>
      <div className="right-login">

      <Register/>
      
            <div className="login-form">
      <h4>Log in</h4>
             <form id="login-form" className="mt-4" onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label>Email</label>
                 <input type="email" name="email" className={`form-control ${touch.email && errors.email ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
                 <div className="invalid-feedback">{ errors.email }</div>
               </div>
               <div className="form-group">
                 <label>Password</label>
                 <input type="password" name="password" className={`form-control ${touch.password && errors.password ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
                 <div className="invalid-feedback">{ errors.password }</div>
               </div>
               <button className="btn btn-login" form="login-form" type="submit" disabled={!this.isValid()}> Login</button>
             </form>
             <p className="mt-4"><small>If you don't have an account yet, you can create it account <Link to="/register">here</Link></small></p>
             </div>

          </div>
        
           </div>
           
           
    );
  }
}
export default withAuthConsumer(Login)
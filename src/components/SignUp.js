import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";


class SignUp extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      username : '',
      password : ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    this.ref.add({
      username,
      password
    }).then((docRef) => {
      this.setState({
        username: '',
        password: '',
      });
      this.props.history.push("/signIn")
    })
    .catch((error) => {
      console.error("Error adding user: ", error);
    });

  }

render() {
    const { username, password } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Sign Up Portal
            </h3>
            <h4>
              <Link to="/" class="btn btn-primary">Stock list</Link>
            </h4>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="username">
                    Username:
                </label>
                <input type="text" 
                       class="form-control" 
                       name="username" 
                       value={username} 
                       onChange={this.onChange} 
                       placeholder="Enter a username" />
              </div>
              <div class="form-group">
                <label for="password">
                    Password:
                </label>
                <input type="password" 
                       class="form-control" 
                       name="password" 
                       value={password} 
                       onChange={this.onChange} 
                       placeholder="Enter a password" />
              </div>
              <button type="submit" class="btn btn-success">
                  Create my account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
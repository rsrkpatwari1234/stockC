import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      username: '',
      password: '',
      watchlist: []
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.props.history.push("/watchlist/"+doc.id)
      } else {
        console.log("No such User!");
        alert("No such user!Please Sign Up.")
        this.props.history.push("/signUp")
      }
    });

  }

  render() {
    const { username, password, watchlist } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Sign In Portal
            </h3>
            <h4>
              <Link to="/" class="btn btn-primary">Stock list</Link>
              <Link to="/signUp" class="btn btn-primary">Sign Up</Link>
            </h4>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" 
                       class="form-control" 
                       name="username" 
                       value={username}
                       onChange={this.onChange} 
                       placeholder="Username" />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" 
                       class="form-control" 
                       name="password" 
                       value={password}
                       onChange={this.onChange} 
                       placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-success">
                  Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
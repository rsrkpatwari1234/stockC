import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('stock_list');
    this.state = {
      company: '',
      market_price: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { company, market_price } = this.state;

    this.ref.add({
      company,
      market_price
    }).then((docRef) => {
      this.setState({
        company: '',
        market_price: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding stock: ", error);
    });
  }

  render() {
    const { company, market_price } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD STOCK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Stock List</Link></h4>
            <form onSubmit={this.onSubmit} action="/">
              <div class="form-group">
                <label for="company">Company:</label>
                <input type="text" 
                       class="form-control" 
                       name="company" 
                       value={company} 
                       onChange={this.onChange} 
                       placeholder="Company" />
              </div>
              <div class="form-group">
                <label for="market_price">
                    Market price:
                </label>
                <input type="text" 
                       class="form-control" 
                       name="market_price" 
                       value={market_price} 
                       onChange={this.onChange} 
                       placeholder="Market price" />
              </div>
              <button type="submit" class="btn btn-success">
                  Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
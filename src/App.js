import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('stock_list');
    this.unsubscribe = null;
    this.state = {
      stock_list: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const stock_list = [];
    querySnapshot.forEach((doc) => {
      const { company, market_price } = doc.data();
      stock_list.push({
        key: doc.id,
        doc, // DocumentSnapshot
        company,
        market_price,
      });
    });
    this.setState({
      stock_list
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="table-title">
            <h3>Popular Stocks</h3>
        </div>
        <h4><Link to="/create" class="btn btn-primary">Add data</Link>
        <Link to="/signIn" class="btn btn-primary">Go to my watch list!</Link></h4>
        <table class="table-fill">
          <thead>
            <tr>
              <th class="text-center">Company</th>
              <th class="text-center">Market Price</th>
            </tr>
          </thead>
          <tbody class="table-hover">
            {this.state.stock_list.map(board =>
              <tr>
                <td class="text-center">{board.company}</td>
                <td class="text-center">{board.market_price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Watchlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      user: []
    };
  }

  componentDidMount() {
    const { username, password} = this.state
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such User!");
      }
    });

  }

  onCollectionUpdate = (querySnapshot) => {
    const watch_list = [];
    querySnapshot.forEach((doc) => {
      const { company, market_price } = doc.data();
      watch_list.push({
        key: doc.id,
        doc, // DocumentSnapshot
        company,
        market_price,
      });
    });
    this.state.watchlist.setState({
      watch_list
   });
  }

  render() {
    return (
      <div class="container">
        <div class="table-title">
            <h3>Popular Stocks for {this.state.key}</h3>
        </div>
        <h4>
          <Link to="/watchlist/${this.state.key}/create" class="btn btn-primary">
            Add data
          </Link>
          <Link to="/" class="btn btn-primary">
            Back to home
          </Link>
        </h4>
  
        <table class="table-fill">
          <thead>
            <tr>
              <th class="text-center">Company</th>
              <th class="text-center">Market Price</th>
            </tr>
          </thead>
          
        </table>
      </div>
    );
  }
}
export default Watchlist;
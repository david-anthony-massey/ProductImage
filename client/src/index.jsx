import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import data from './CanadianAPISorryEh.js';
import Categories from './components/Categories.jsx';
import TransactionList from './components/TransactionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      categories: [],
      newCat: '',
      budget: ''
    };

    this.addCat = this.addCat.bind(this);
    this.newCat = this.newCat.bind(this);
    this.setBudget = this.setBudget.bind(this);
  }

  componentDidMount() {
    //you need some transactions bruh
    axios.get('http://localhost:3000/api/transactions')
    .then((response) => {
      this.setState({
        transactions: response.data
      })
    })
    .catch((err) => {console.error('no transactions for you')});

    //grab them categories, son
    axios.get('http://localhost:3000/api/categories')
    .then((response) => {
      this.setState({
        categories: response.data
      })
    })
    .catch((err) => {console.error('no categories for you')});
  }

  newCat(event) {
    event.preventDefault;
    this.setState({
      newCat: event.target.value
    })
  }

  setBudget(event) {
    event.preventDefault;
    this.setState({
      budget: event.target.value
    })
  }

  addCat() {
    //add a category, meow
    var newCat = {
      cat: this.state.newCat,
      budget: this.state.budget
    }

    axios.post('http://localhost:3000/api/categories', newCat)
    .then((response) => {
      // console.log(response);
      this.setState({
        categories: [...this.state.categories, this.state.newCat]
      })
    })
    .then(()=> {
      window.location.reload(false);
    })
    .catch((err) => {console.error('bad kitty')});

    this.setState({
      newCat: '',
      budget: ''
    })

  }


  getCat(event) {
    //parses the category_id to figure out what cat it is
    event.preventDefault

    var getCat = {
      cat: event.target.value
    }
    axios.get('http://localhost:3000/api/category')
    .then((response) => {

    })
    .catch((err) => {console.error('cant find a cat')});

  }

  render() {
    return (
      <div>
      <h1>BoilerPlate</h1>
      <div className="app">
        <TransactionList/>
        <Categories/>
      </div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Manager from './Manager';
import './App.css'

class App extends React.Component {
  state = {
    packCards: [],
    newCardCreate: false,
    revealAnswaer: false
  }
  async componentDidMount() {
    const response = await mockapi.get('/card');
    this.setState({
      packCards: response.data
    });
    console.log(this.state.packCards);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/game" exact component={Game} />
            <Route path="/Manager" exact component={Manager} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// <Route path="/product" exact component={Products} />
// <Route path="/product/:id" component={ProductID}/> 
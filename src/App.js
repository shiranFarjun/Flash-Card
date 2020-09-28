import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Manager from './Manager';
import './App.css'
import ObjCard from './ObjCard.js'
import mockapi from './api/mockapi';
// import postNewCard from './component/PostNewCard'


class App extends React.Component {
  state = {
    packCards: []
  }

  componentDidMount = async () => {
    if (this.state.packCards.length === 0) {
      console.log('IF -->this.state.packCards is EMPTY', this.state.packCards)
      const response = await mockapi.get('/card');
      if (response.data.length !== 0) {
        console.log('DB is with data')
        this.setState({
          packCards: response.data
        });
        console.log(this.state.packCards)
      } else {
        console.log('DB is NOT with data')
        ObjCard.map((item) => {
          return this.postNewCard(item)
          // return postNewCard(item,this.state.packCards))
        });
      }
    } else {
      console.log('ELSE -->this.state.packCards is with data he didnt need init()', this.state.packCards)
    }
  }

  postNewCard = async (newObj) => {
    const response = await mockapi.post('/card', newObj);
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
            <Route path="/game" exact render={(props) => <Game packCards={this.state.packCards}  {...props} />} />
            <Route path="/Manager" exact render={(props) => <Manager onSubmit={this.postNewCard} packCards={this.state.packCards}  {...props} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


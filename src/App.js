import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Manager from './Manager';
import './App.css'
import ObjCard from './ObjCard.js'
import mockApi from './api/mockApi';


class App extends React.Component {
  state = {
    packCards: [],
    cardID: ''
  }

  componentDidMount = () => {
    this.initStateCards();
  }

  initStateCards = async () => {
    if (this.state.packCards.length === 0) {
      console.log('IF -->this.state.packCards is EMPTY', this.state.packCards)
      const response = await mockApi.get('/card');
      if (response.data.length !== 0) {
        console.log('DB is with data')
        this.setState({
          packCards: response.data
        });
      } else {
        console.log('DB is NOT with data')
        ObjCard.map((item) => {
          return this.postNewCard(item)
        });
        const response = await mockApi.get('/card');
        this.setState({
          packCards: response.data
        });
      }
    } else {
      console.log('ELSE -->this.state.packCards is with data he didn`t need init()', this.state.packCards)
    }
    console.log(this.state.packCards);
  }
  
  actionClick = (action) => {
    switch (action) {
      case 'create':
        console.log(action);
        break;
      case 'edit':
        console.log(action);
        break;
      case 'delete':
        console.log(action);
        break;
    }
  }


  getCards = async () => {
    const response = await mockApi.get('/card');
    return response;
  }

  postNewCard = async (newObj) => {
    await mockApi.post('/card', newObj);
  }

  deleteOneCard = async (objCard) => {
    await mockApi.delete(`/card/${objCard.id}`);
  };


  upDateCard = async (editedItem, selectedQuestion, props) => {
    // const questionID = this.state.cardsArr.filter((card) => {
    //   if (card.question === selectedQuestion.slice(10))
    //     return card;
    // });
    // console.log(questionID);
    // await mockapi.put(`/cards/${questionID[0].id}`, editedItem);
    // const response = await mockapi.get('/cards');
    // this.setState({ cardsArr: response.data });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/game" exact render={(props) => <Game packCards={this.state.packCards}  {...props} />} />
            <Route path="/Manager" exact render={(props) => <Manager actionClick={this.actionClick} packCards={this.state.packCards}  {...props} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// const response = await mockApi.get('/card');
// this.setState({
//   packCards: response.data
// });
// console.log(this.state.packCards);

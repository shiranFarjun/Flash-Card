import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import mockapi from './api/mockapi';
import Header from './Header';
import Home from './Home';
import Game from './Game';
import Manager from './Manager';
import './App.css'
import ObjCard from './ObjCard.js'


class App extends React.Component {
  state = {
    packCards: [],
    currentCard: {},
    newCardCreate: false,
    revealAnswaer: false
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
        ObjCard.map((item)=> {
          return this.postNewCard(item)
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
    console.log("in app postNewCard!!", this.state.packCards);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/game" exact render={(props) => <Game postNewCard={this.postNewCard} packCards={this.state.packCards}  {...props} />} />
            <Route path="/Manager" exact  render={(props) => <Manager packCards={this.state.packCards}  {...props} />} />  
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// <Route path="/product" exact component={Products} />
// <Route path="/product/:id" component={ProductID}/> 











// //////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import mockapi from './api/mockapi';
// import Header from './Header';
// import Home from './Home';
// import Game from './Game';
// import Manager from './Manager';
// import './App.css'

// class App extends React.Component {
//   state = {
//     packCards: [],
//     currentCard: {},
//     newCardCreate: false,
//     revealAnswaer: false
//   }
//   async componentDidMount() {
//     console.log('this.state.packCards',this.state.packCards.length)
//     if (this.state.packCards.length === 0) {
//       const response = await mockapi.get('/card');
//       this.setState({
//         packCards: response.data
//       });
//     } else {
//       console.log("packCards is full in data-->from app!")
//     }
//     console.log('this.state.packCards',this.state.packCards)

//   }

//   postNewCard = async (newObj) => {
//     const response = await mockapi.post('/card', newObj);  //  const response =
//     this.setState((prevState, prevProps) => {
//       return {
//         packCards: [...prevState.packCards, newObj]
//       };
//     })
//     console.log("in app postNewCard!!", this.state.packCards);
//   }

//   getRandomCard() {
//     let card = Math.floor(Math.random() * Math.floor(this.props.packCards[0]));

//     return (card);
//   }

//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <div className="container">
//             <Header />
//             <Route path="/" exact component={Home} />
//             <Route path="/game" exact render={(props) => <Game postNewCard={this.postNewCard} packCards={this.state.packCards}  {...props} />} />
//             <Route path="/Manager" exact component={Manager} />
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;


// <Route path="/product" exact component={Products} />
// <Route path="/product/:id" component={ProductID}/> 
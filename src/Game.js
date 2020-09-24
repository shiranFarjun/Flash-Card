import React from 'react';
import mockapi from './api/mockapi';

class Game extends React.Component {

    postNewCard = async (newCard) => {
        await mockapi.post('/card', newCard);
        this.setState((prevState, prevProps) => {
            return {
                packCards: [...prevState.packCards, newCard]
            };
        })
    }

    render() {
        return (
            <div >
                <div className="view-card">QUESTION</div>
                <button>New card</button>
                <button>Reveal answaer</button>
                <p>Did you get it right? </p>
                <p>completed: </p>
                <p>0/3</p>
            </div>
        );
    };
};

export default Game;
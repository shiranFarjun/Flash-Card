import React from 'react';
// import mockapi from './api/mockapi';
// import ObjCard from './ObjCard.js'

class Game extends React.Component {
    state = {
        indexesAppeared: [],
        textCard: ' ',
        length: this.props.packCards.length,
        min: 0,
        shouldHide: true,
    };

    componentDidMount = () => {
        this.newCard();
    }

    newCard = () => {
        let index = 0;
        while (this.state.indexesAppeared.includes(index)&& this.state.indexesAppeared.length<this.state.length ) {
            index = this.getRandomCard();
            console.log('new card index', index);
        }
        let question = this.props.packCards[index]['question'];
        this.setState(prevState => ({
            indexesAppeared: [...prevState.indexesAppeared, index],
            textCard: question,
            randomIndex: index
        }));
    }

    getRandomCard = () => {
        return Math.floor(Math.random() * Math.floor(this.state.length));
    }

    shawAnswaer = () => {
        this.setState({
            textCard: this.props.packCards[this.state.indexesAppeared[this.state.indexesAppeared.length - 1]]['answer'],
            shouldHide: false
        });
    };

    upDateScore = (e) => {
        console.log('e', e.currentTarget.textContent)
        if (e.currentTarget.textContent === 'Yes') {
            if (this.state.min < this.state.length) {
                this.setState({
                    min: this.state.min + 1
                });
            } else {
                alert('You have completed all cards')
            }
        } else {
            this.setState({
                min: this.state.min - 1
            });
        }
    }


    render() {
        return (
            <div className="continer-game" >
                <div className="view-card">
                    <span className="text-card">{this.state.textCard}</span>
                </div>
                <button className="btn1" onClick={this.newCard}>New card</button>
                <button className="btn2" onClick={this.shawAnswaer}>Reveal answaer</button>
                <p className={this.state.shouldHide ? 'hidden' : ''}>Did you get it right?</p>
                <button className={this.state.shouldHide ? 'hidden' : ''} onClick={this.upDateScore}>Yes</button>
                <button className={this.state.shouldHide ? 'hidden' : ''} onClick={this.upDateScore}>No</button>
                <p>completed: </p>
                <p>{this.state.min}/{this.state.length}</p>
            </div>
        );
    };
};

export default Game;


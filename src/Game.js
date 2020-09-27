import React from 'react';
// import mockapi from './api/mockapi';
// import ObjCard from './ObjCard.js'

class Game extends React.Component {
    state = {
        textCard: ' ',
        randomIndex:0
    };
    length=this.props.packCards.length;
   
    componentDidMount = () => {
        let index = this.getRandomCard();
        let question= this.props.packCards[index]['question'];
        this.setState({
            textCard:question,
            randomIndex: index,
            min:0,
            shouldHide:true
        });
    }

    getRandomCard = () => {
        return Math.floor(Math.random() * Math.floor(this.length)); 
    }

    shawAnswaer = () => {
        this.setState({ 
            textCard:  this.props.packCards[this.state.randomIndex]['answer'],
            shouldHide:false
        });
    };

    upDateScore=(e)=>{
        console.log('e',e.currentTarget.textContent)
        if(e.currentTarget.textContent==='Yes'){
            if(this.state.min<this.length){
                this.setState({ 
                    min:this.state.min+1
                });
            }else{
                console.log('You have completed all flash card')
                ///start new gema make score 0 and update function.
            }
        }else{
            console.log('the user parse No')
        }
    }
    render() {
        return (
            <div className="continer-game" >
                <div className="view-card">
                    <span className="text-card">{this.state.textCard}</span>
                </div>
                <button className="btn1">New card</button>
                <button className="btn2" onClick={this.shawAnswaer}>Reveal answaer</button>
                <p className={this.state.shouldHide ? 'hidden' : ''}>Did you get it right?</p>
                <button className={this.state.shouldHide ? 'hidden' : ''} onClick={ this.upDateScore }>Yes</button>
                <button className={this.state.shouldHide ? 'hidden' : ''} onClick={ this.upDateScore }>No</button>
                <p>completed: </p>
                <p>{this.state.min}/{this.length}</p>
            </div>
        );
    };
};

export default Game;


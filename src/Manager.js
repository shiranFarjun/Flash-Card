import React from 'react';
import mockapi from './api/mockapi';
// import AddCard from './AddCard'

class Manager extends React.Component {
    state = {
        packCards: [],
        question: '',
        answer: '',
        index:0
    };
   
    componentDidMount = () => {
        this.setState({
            packCards: this.props.packCards
        });
    }

    handleBtnsClick = (e) => {                          //I need to fix this
        let action = e.currentTarget.textContent;
        // console.log('e.target.value', e.target.value)
        // console.log('this.props.packCards[index]\n', this.props.packCards[this.index])
        if (action === 'Edit') {
        } else {
            console.log('delete')
        }
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const newCard = {
            id: this.props.packCards.length + 1,
            question: this.state.questionCreate,
            answer: this.state.answerCreate
        };
        this.props.onSubmit(newCard);
    }

    editCard = async (editedCard) => {
        await mockapi.put(`/card/${editedCard.id}`, editedCard);
        const response = await mockapi.get('/card');
        this.setState({ packCards: response.data });
    }

    deleteCard = async (deletedCard) => {
        await mockapi.delete(`/card/${deletedCard.id}`);
        const response = await mockapi.get('/card');
        this.setState({ packCards: response.data });
    }



    render() {
        return (
            <div className="manger-continer">
                {this.props.packCards.map((card, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5>question: {card.question}</h5>
                                <p>answer: {card.answer}</p>
                            </div>
                            <button value={index} className="btn-manger" onClick={this.handleBtnsClick} > Delete</button>
                            <button value={index} className="btn-manger" onClick={this.handleBtnsClick}> Edit</button>

                        </div>
                    )
                })}
                <div className="add-card">
                    <h3>add new card</h3>
                    <form className="newCardForm" onSubmit={this.handleOnSubmit}>
                        <h4>question:</h4>
                        <textarea onChange={e => this.setState({ question: e.target.value })}></textarea> <br />
                        <h4>answer:</h4>
                        <textarea onChange={e => this.setState({ answer: e.target.value })}></textarea> <br />
                        <div className="submit">
                            <input type="submit" name="submit" value="Add"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default Manager;


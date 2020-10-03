import React from 'react';

class Manager extends React.Component {
    state = {
        question: '',
        answer: '',
        index: 0
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





    render() {
        return (
            <div className="manger-container">
                {this.props.packCards.map((card, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5>question: {card.question}</h5>
                                <p>answer: {card.answer}</p>
                            </div>
                            <button value={index} className="btn-manger" onClick={this.actionClick}> Delete</button>
                            <button value={index} className="btn-manger" onClick={this.actionClick}> Edit</button>
                        </div>
                    )
                })}
                <div className="add-card">
                    <h3>add new card</h3>
                    <form className="newCardForm" onSubmit={this.handleOnSubmit}>
                        <label>question:</label>
                        <input type="text" placeholder={card.question} onChange={e => this.setState({ editedQuestion: e.target.value })}></input> <br />
                        <label>answer:</label>
                        <input type="text" placeholder={card.answer} onChange={e => this.setState({ editedAnswer: e.target.value })}></input> <br />
                        <input type="submit" name="submit" value="Add"></input>
                    </form>
                </div>
            </div >
        );
    };
};

export default Manager;


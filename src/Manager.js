import React from 'react';
import mockapi from './api/mockapi';

class Manager extends React.Component {
    state = {
        packCards: [],
        showEditModal: false,
        showdeleteModal: false,
        selectedCard: ''
    };
    index = 0;

    componentDidMount = () => {
        this.setState({
            packCards: this.props.packCards
        });

    }

    handleBtnsClick = (e) => {
        let action=e.currentTarget.textContent;
        this.index = e.target.value;
        // console.log('e.target.value', e.target.value)
        // console.log('this.props.packCards[index]\n', this.props.packCards[this.index])
        if(action==='Edit'){
            console.log('1')
            this.setState({ showEditModal: true });
            this.editCard(this.props.packCards[this.index])
        }else{
            console.log('2')
            this.setState({ deleteItem: true });
            this.deleteCard(this.props.packCards[this.index])
        }

        // this.setState({ selectedCard: e.target.value });
    }

    editCard = async (editedCard) => {
        console.log('editedCard');
        await mockapi.put(`/card/${editedCard.id}`, editedCard);
        const response = await mockapi.get('/card');
        this.setState({ packCards: response.data });
        this.setState({ showEditModal: false })
        console.log('after-editedCard');
    }

    deleteCard = async (deletedCard) => {
        console.log('deletedCard');
        await mockapi.delete(`/card/${deletedCard.id}`);
        const response = await mockapi.get('/card');
        this.setState({ packCards: response.data });
        this.setState({ showdeleteModal: false });
        console.log('after-deleteCard');

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
            </div>
        );
    };
};

export default Manager;
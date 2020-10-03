// import mockApi from '../api/mockApi';


// class updateCard extends React.Component {
//     state = {
//         cardArr: []
//     }
//     componentWillMount=()=> {
//         this.upDateCard()
//     }
//     upDateCard = async (editedItem, selectedQuestion, props) => {
//         const questionID = this.state.cardsArr.filter((card) => {
//             if (card.question === selectedQuestion.slice(10))
//                 return card;
//         });
//         console.log(questionID);
//         await mockapi.put(`/cards/${questionID[0].id}`, editedItem);
//         const response = await mockapi.get('/cards');
//         this.setState({ cardsArr: response.data });
//     }

//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
// export default updateCard;

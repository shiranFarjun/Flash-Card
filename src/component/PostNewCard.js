// import mockApi from '../api/mockApi';


// class postNewCard extends React.Component {
//     state = {
//         cardArr: []
//     }
//     componentWillMount() {
//         this.postNewCard()
//     }
//     postNewCard = async (newObj, props) => {
//         const response = await mockApi.post('/card', newObj);
//         // props.packCards = response.data
//         // console.log("in postNewCard -->props!!", props.packCards);
//         const response = await mockApi.get('/cards');
//         this.setState({ 
//             cardsArr: response.data
//          });
//     }

//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
// export default postNewCard;

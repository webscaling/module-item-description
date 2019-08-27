import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {
        "ProductId": 2,
        "Category": '',
        "ItemName": '',
        "Price": 0,
        "Rating": 0,
        "Photo": [],
        "sellingPoints": [],
        "numOfQuestions": 0,
        "numOfRatings": 0,
        "ratingImage": ''
      },

    }
  }

  componentDidMount() {
    axios.get('/itemDescription')
    .then((response) => {
      this.setState({
        magic: response.data,
        selectedItem: response.data[Math.floor(Math.random() * Math.floor(response.data.length - 1))]
      }, () => console.log(this.state.selectedItem))
    })
  }

  render() {
    return (
      <div id="des_itemDescriptionModule">
        <Title item={this.state.selectedItem}/>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("app"));
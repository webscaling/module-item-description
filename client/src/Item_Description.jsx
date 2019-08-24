import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {
        "sellingPoints":[],
        "otherColors": [],
        "productId": 2,
        "rating": 0,
        "numOfRatings": 0,
        "numOfQuestions": 0,
        "title": ''
      },

    }
  }

  componentDidMount() {
    axios.get('/item')
    .then((response) => {
      this.setState({
        magic: response.data,
        selectedItem: response.data[2]
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
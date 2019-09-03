import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';
import Price_Over from './Price_Over.jsx';
import Price_Under from './Price_Under.jsx';

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
      color: undefined,
    }
    this.reviewsOnClick = this.reviewsOnClick.bind(this);
    this.questionsOnClick = this.questionsOnClick.bind(this);
    this.colorPhotosOnHover = this.colorPhotosOnHover.bind(this);
    this.colorPhotosOnLeave = this.colorPhotosOnLeave.bind(this);
  }

  componentDidMount() {
    axios.get('http://ec2-18-219-43-62.us-east-2.compute.amazonaws.com/itemDescription')
    .then((response) => {
      this.setState({
        magic: response.data,
        selectedItem: response.data[Math.floor(Math.random() * Math.floor(response.data.length - 1))]
      })
    })
  }

  reviewsOnClick(event) {
    event.preventDefault();
    console.log("goes to reviews section");
  }

  questionsOnClick(event) {
    event.preventDefault();
    console.log("goes to questions section");
  }

  colorPhotosOnHover(event) {
    event.preventDefault();
    this.setState({
      color: event.target.className,
    });
  }

  colorPhotosOnLeave(event) {
    event.preventDefault();
    this.setState({
      color: undefined,
    });
  }

  render() {
    return (
      <div id="des_itemDescriptionModule">
        <Title
          item={this.state.selectedItem}
          reviewsOnClick={this.reviewsOnClick}
          questionsOnClick={this.questionsOnClick}
          colorPhotosOnHover={this.colorPhotosOnHover}
          colorPhotosOnLeave={this.colorPhotosOnLeave}
          color={this.state.color}
        />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("des_app"));
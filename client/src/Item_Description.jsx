import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';
import Price_Over from './Price_Over.jsx';
import Price_Under from './Price_Under.jsx';
import setRatingImage from '../../db/data_helpers/setRatingImage.js';

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
        "ratingImage": '',
        "colorChoices": []
      },
      color: undefined,
    }

    this.getClickedItem = this.getClickedItem.bind(this);
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
        selectedItem: response.data[66]
      })
    })
    .catch((err) => {
      console.error(err)
    })


    window.addEventListener('clickedProduct', (event) => {
      if (event.detail) {
        this.getClickedItem(event.detail)
      }
    })

    window.addEventListener('reviewUpdate', (event) => {
      console.log(event.detail);
      if (event.detail) {
        this.setState(prevState => {
          let selectedItem = Object.assign({}, prevState.selectedItem);
            selectedItem.numOfRatings = event.detail.numReviews;
            selectedItem.reviewBreakdown =  event.detail.reviewBreakdown;
            selectedItem.Rating = event.detail.reviewsAvg;
            selectedItem.ratingImage = setRatingImage(event.detail.reviewsAvg);
            return { selectedItem };
        })
        axios.put('http://ec2-18-219-43-62.us-east-2.compute.amazonaws.com/itemDescription')
        .catch((err) => {
          console.error(err)
        })
      }
      console.log(this.state.selectedItem);
    })
  }
  // var event = new CustomEvent('reviewUpdate', {
  //   detail: {
  //     numReviews: 10,
  //     reviewBreakdown: {
  //       1:1,
  //       2:2,
  //       3:2,
  //       4:2,
  //       5:3
  //     },
  //     reviewsAvg: 3.4
  //   }
  // });


  getClickedItem(inputId) {
    event.preventDefault();
    axios.get(`http://ec2-18-219-43-62.us-east-2.compute.amazonaws.com/itemDescription?ProductId=${inputId}`)
    .then((response) => {
      this.setState({
        selectedItem: response.data[0],
      })
    })
    .catch((err) => {
      console.error(err)
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
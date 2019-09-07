import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';
import Price_Over from './Price_Over.jsx';
import Price_Under from './Price_Under.jsx';
import Reviews_Popover from './Reviews_Popover.jsx';
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
      color: "Natural",
      popover: "#des_reviewsHoverHide",
    }

    this.getClickedItem = this.getClickedItem.bind(this);
    this.reviewsOnClick = this.reviewsOnClick.bind(this);
    this.questionsOnClick = this.questionsOnClick.bind(this);
    this.colorPhotosOnHover = this.colorPhotosOnHover.bind(this);
    this.colorPhotosOnLeave = this.colorPhotosOnLeave.bind(this);
    this.reviewsOnHover = this.reviewsOnHover.bind(this);
    this.reviewsOnLeave = this.reviewsOnLeave.bind(this);
  }

  componentDidMount() {
    axios.get('http://ec2-52-15-133-188.us-east-2.compute.amazonaws.com/itemDescription?ProductId=66')
    .then((response) => {
      this.setState({
        selectedItem: response.data[0]
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
      if (event.detail) {
        this.setState(prevState => {
          let selectedItem = Object.assign({}, prevState.selectedItem);
            selectedItem.numOfRatings = event.detail.numReviews;
            selectedItem.reviewBreakdown =  event.detail.reviewBreakdown;
            selectedItem.Rating = event.detail.reviewsAvg;
            selectedItem.ratingImage = setRatingImage(event.detail.reviewsAvg);
            return { selectedItem };
        }, () => {
          axios.put('http://ec2-52-15-133-188.us-east-2.compute.amazonaws.com/itemDescription', this.state.selectedItem)
          .catch((err) => {
            console.error(err)
          })
        })
      }
    })

    window.addEventListener('questionUpdate', (event) => {
      if (event.detail) {
        this.setState(prevState => {
          let selectedItem = Object.assign({}, prevState.selectedItem);
            selectedItem.numOfQuestions = event.detail.numQuestions;
            return { selectedItem };
        }, () => {
          axios.put('http://ec2-52-15-133-188.us-east-2.compute.amazonaws.com/itemDescription', this.state.selectedItem)
          .catch((err) => {
            console.error(err)
          })
        })
      }
    })
  }

  getClickedItem(inputId) {
    event.preventDefault();
    axios.get(`http://ec2-52-15-133-188.us-east-2.compute.amazonaws.com/itemDescription?ProductId=${inputId}`)
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
    const myElement = document.getElementById('reviewsApp');
    const topPos = myElement.offsetTop;
    window.scrollTo(0, topPos);
  }

  questionsOnClick(event) {
    event.preventDefault();
    const myElement = document.getElementById('qa-app');
    const topPos = myElement.offsetTop;
    window.scrollTo(0, topPos);
  }

  colorPhotosOnHover(event) {
    this.setState({
      color: event.target.className,
    });
  }

  colorPhotosOnLeave(event) {
    this.setState({
      color: "Natural",
    });
  }

  // reviewsOnHover(event) {
  //   this.setState({
  //     popover: "des_reviewsHover",
  //   });
  // }

  // reviewsOnLeave(event) {
  //   this.setState({
  //     popover: "des_reviewsHoverHide",
  //   });
  // }

  render() {
    return (
      <div id="des_itemDescriptionModule">
        <Title
          item={this.state.selectedItem}
          reviewsOnClick={this.reviewsOnClick}
          questionsOnClick={this.questionsOnClick}
          colorPhotosOnHover={this.colorPhotosOnHover}
          colorPhotosOnLeave={this.colorPhotosOnLeave}
          reviewsOnHover={this.reviewsOnHover}
          reviewsOnLeave={this.reviewsOnLeave}
          color={this.state.color}
          popover={this.state.popover}
        />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("des_app"));
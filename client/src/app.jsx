import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './Title.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},

    }
  }

  componentDidMount() {
    axios.get('/item')
    .then((response) => {
      this.setState({
        magic: response.data,
        selectedItem: response.data[0]
      }, () => console.log(this.state.selectedItem))
    })
  }

  render() {
    return (
      <Title item = {this.state.selectedItem}/>

    )
  }

}



ReactDOM.render(<App />, document.getElementById("app"));
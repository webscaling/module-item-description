import React from 'react';

const Title = (props) => {
  return (
  <div>
    <div id="des_title">
        {props.item.title}
    </div>
    <div id="des_rating">
        {props.item.rating}
        {props.item.numOfRatings}
    </div>
    <div id="des_numOfQuestions">
        {props.item.numOfQuestions}
    </div>
    <div id="des_price">
        {props.item.price}
    </div>
    <div id="des_options">
        {props.item.otherColors}
    </div>
    <div id="des_sellingPoints">
      <ul>
        {console.log(props.item.sellingPoints)}
        {props.item.sellingPoints.map((point) => (
          <li key={point} className="des_sellingPoint">{point}</li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Title;
import React from 'react';
import Price_Over from './Price_Over.jsx';
import Price_Under from './Price_Under.jsx';
import Reviews_Popover from './Reviews_Popover.jsx';


const Title = (props) => {

  return (
  <div>
    <div id="des_title">
        {props.item.ItemName}
    </div>
    <div id="des_reviewsRatingsQuestions">
      <span id="des_rating">
        <span id={props.popover}
          onMouseOver={(e) => props.reviewsOnHover(e)}
          onMouseOut={(e) => props.reviewsOnLeave(e)}
          >
          {/* <Reviews_Popover item={props.item} /> */}
          <span id="des_stars">
            <img id="des_stars_img" src={props.item.ratingImage}></img>
          </span>
          <span>
            <img id="des_expand_arrow" src="https://shazamazon.s3.us-east-2.amazonaws.com/icons/expand_arrow.png"></img>
          </span>
        </span>
        <span id="des_numOfRatings" onClick={props.reviewsOnClick}>
          {props.item.numOfRatings} customer reviews
        </span>
      </span>
      <span className="des_grey">   |
      </span>
      <span id="des_numOfQuestions" onClick={props.questionsOnClick}>
          {props.item.numOfQuestions} answered questions
      </span>
    </div>
    <div id="des_listPrice">
      List Price: <span id="des_crossedOut">{(props.item.Price * 1.2).toFixed(2)}</span>
    </div>
      {(props.item.Price < 25) ? (<Price_Under item={props.item} />) : (<Price_Over item={props.item} />)}
    <div id="des_colors">
      <span id="des_colorChoice" className="des_bold">Color: </span>
      <span id="des_colorChoice">{props.color}</span>
      <div>
      <span id="des_colorPhotos">
        {props.item.colorChoices.map((color) => (
          <span id={color.spanId}
          key={color.spanId}>
            <img id={color.id}
            onMouseOver={(e) => props.colorPhotosOnHover(e)}
            onMouseOut={(e) => props.colorPhotosOnLeave(e)}
            className={color.name}
            key={color.id}
            src={props.item.Photo[0]}>
            </img>
          </span>
        ))}
      </span>
      </div>
    </div>
    <div id="des_sellingPoints">
      <ul className="des_ul">
        {props.item.sellingPoints.map((point) => (
          <li key={point} className="des_sellingPoint">{point}</li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Title;
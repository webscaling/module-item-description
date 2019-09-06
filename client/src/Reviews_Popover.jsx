import React from 'react';

const Reviews_Popover = (props) => {
  return (
    <div id="des_popoverContent">
      {props.item.reviewBreakdown}
    </div>
  )
}

export default Reviews_Popover;
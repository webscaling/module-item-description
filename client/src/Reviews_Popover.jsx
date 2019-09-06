import React from 'react';

const Reviews_Popover = (props) => {
  return (
    <div id="popoverContent">
      {props.item.reviewBreakdown}
    </div>
  )
}

export default Reviews_Popover;
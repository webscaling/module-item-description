
const setRatingImage = function(rating) {
  if (rating < 0.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/00stars.png";
  }
  if (rating < 0.75) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/05stars.png";
  }
  if (rating < 1.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/10stars.png";
  }
  if (rating < 1.75) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/15stars.png";
  }
  if (rating < 2.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/20stars.png";
  }
  if (rating < 2.75) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/25stars.png";
  }
  if (rating < 3.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/30stars.png";
  }
  if (rating < 3.75) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/35stars.png";
  }
  if (rating < 4.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/40stars.png";
  }
  if (rating < 4.75) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/45stars.png";
  }
  if (rating < 5.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/50stars.png";
  }
};

module.exports = setRatingImage;
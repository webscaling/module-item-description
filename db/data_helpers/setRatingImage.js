
const setRatingImage = function(rating) {
  if (rating < 0.2) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/00stars.png";
  }
  if (rating < 0.9) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/05stars.png";
  }
  if (rating < 1.2) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/10stars.png";
  }
  if (rating < 1.9) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/15stars.png";
  }
  if (rating < 2.2) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/20stars.png";
  }
  if (rating < 2.9) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/25stars.png";
  }
  if (rating < 3.2) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/30stars.png";
  }
  if (rating < 3.9) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/35stars.png";
  }
  if (rating < 4.2) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/40stars.png";
  }
  if (rating < 4.9) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/45stars.png";
  }
  if (rating < 5.25) {
    return "https://shazamazon.s3.us-east-2.amazonaws.com/stars/50stars.png";
  }
};

module.exports = setRatingImage;
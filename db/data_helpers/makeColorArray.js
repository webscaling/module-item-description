
const colorArr = [{"name": "Red", "id":"des_redPhoto", "spanId":"des_redImgBorder"}, {"name": "Invisible", "id":"des_invisiblePhoto", "spanId":"des_invisibleImgBorder"}, {"name": "Blue", "id":"des_bluePhoto", "spanId":"des_blueImgBorder"}, {"name": "Green", "id":"des_greenPhoto", "spanId":"des_greenImgBorder"}, {"name": "Yellow", "id":"des_yellowPhoto", "spanId":"des_yellowImgBorder"}, {"name": "Orange", "id":"des_orangePhoto", "spanId":"des_orangeImgBorder"}, {"name": "Purple", "id":"des_purplePhoto", "spanId":"des_purpleImgBorder"}];

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeColorArray = function() {
  let count = getRandomInt(2, 5);
  let colors = [];
  while (count >= 0) {
    colors.push(colorArr[Math.floor(Math.random() * Math.floor(colorArr.length))]);
    count--;
  }
  return [...new Set(colors)];
};

module.exports = makeColorArray;
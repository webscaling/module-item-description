
const colorArr = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeColorArray = function(sourceArr) {
  let count = getRandomInt(2, 4);
  let colors = [];
  while (count >= 0) {
    colors.push(colorArr[Math.floor(Math.random() * Math.floor(sourceArr.length - 1))])
    count--;
  }
  return [...new Set(colors)];
};

module.exports = makeColorArray;
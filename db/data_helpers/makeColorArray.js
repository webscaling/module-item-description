
const colorArr = [{"name": "Red", "id":"des_redPhoto"}, {"name": "Blue", "id":"des_bluePhoto"}, {"name": "Green", "id":"des_greenPhoto"}, {"name": "Yellow", "id":"des_yellowPhoto"}, {"name": "Orange", "id":"des_orangePhoto"}, {"name": "Purple", "id":"des_purplePhoto"}];

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeColorArray = function(sourceArr) {
  let count = getRandomInt(2, 5);
  let colors = [];
  while (count >= 0) {
    colors.push(colorArr[Math.floor(Math.random() * Math.floor(sourceArr.length - 1))])
    count--;
  }
  return [...new Set(colors)];
};

module.exports = makeColorArray;
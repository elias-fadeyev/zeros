module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  for (let i = 5; ; i = i * 5) {
    if (Math.floor(number / i) === 0) break;
    zerosCount += Math.floor(number / i);
  }
  return zerosCount;
}

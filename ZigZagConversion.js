function convert(s, numRows) {
  if (s.length < numRows || numRows < 2) return s;
  let hashMap = {};
  let currPos = 0;
  let isInc = true;
  for (let i = 0; i < s.length; i++) {
    if (currPos == numRows) isInc = false;
    if (currPos == 1) isInc = true;
    if (isInc) currPos++;
    else currPos--;
    if (!hashMap[currPos]) {
      hashMap[currPos] = s[i];
    } else {
      hashMap[currPos] = hashMap[currPos] + '' + s[i];
    }
  }
  let finalString = '';
  for (let j = 1; j <= numRows; j++) {
    finalString = finalString + hashMap[j];
  }
  return finalString;
}
console.log(convert('PAYPALISHIRING', 3));

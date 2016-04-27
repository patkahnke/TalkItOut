var value = 42
console.log('Step 1: value =', value)
if(value >= 53) {

  value += 42;
} else {

  value -= 13;
}
console.log('step 2: value =', value)
var eleven = "11";

value += eleven;
console.log('Step 3: value =', value);
//value is a string of "2911"
var array = [];

for(var i = 0; i < value.length; i++) {

  array[i] = value.charAt(i);
}
//value is still "2911" array is ["2", "9", "1", "1"]
console.log('step 4: array =', array);
array.shift();
array.pop();
// array is now ["9", "1"]
console.log('step 5: array =', array);

var backwards = "";

for(var i = array.length - 1; i >= 0; i--) {
backwards += array[i];

}
// backwards equals a string of "19"
console.log('step 6: backwards =', backwards);
value = parseInt(value);
backwards = parseInt(backwards);
console.log('step 7a: backwards =', backwards);
console.log('step 7b: value =', value);

value += backwards;
//Parsed them both into numbers. Value equals 2930
console.log('step 8: value =', value);
if (value < 60) {
  value = 14;
} else if (value == 2930) {
  value = 27;
} else {
  value = 2;
}
//Value = 2
console.log('step 9: value =', value);
i = 10;
while (i > 0) {
  value++;
  i--;
}
//Value = 12
console.log('step 10: value =', value);
function String(val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.slice(1);

  }
    value = val;
    return val;
}
String(value);

console.log('step 11-13: value =', value);

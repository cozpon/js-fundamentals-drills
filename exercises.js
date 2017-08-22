/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2); 
  }
  return result;
};


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */

 var sumArrays = function(array1, array2) {
   var result = 0;
   var loopLength = 0;
 
   if (array1.length > array2.length) {
     loopLength = array1.length;
   } else {
     loopLength = array2.length;
   }
 
   for (var i = 0; i < loopLength; i++) {
     result += (array1[i]+array2[i])
   }
   return result;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

var stringCount = function(str) {
  var result = str.length;
  return result; 
 };

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */


var arrayLength = function(arr) {
  var result = arr.length;
    return result;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */


var countAll = function(num){
  var numberHolder = 0;
    for(var i = 0; i < num.length; i++){
    numberHolder += num[i]
  }
  return numberHolder;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
*/
var countStrings = function(arr) {
  var numberHolder = [];
  for(var i = 0; i < arr.length; i++){
   numberHolder[i] = arr[i].length;
  }
  return numberHolder;
}



/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(str){
  var sum = 0;
  for (var i = 0; i < str.length; i++){
    sum += str[i].length;
  }
  return sum;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  var arr = [];
    for(var value in obj) {
    arr.push(obj[value]);
}
    return arr;
};


/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
  var createArray = [];
  for(var i in obj){
    createArray.push(obj[i]);
  } return createArray.length;
};



/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function (number){
  var createArray = [];
  for(var i = 0; i < number; i++){
    createArray.push(0);
  }
  return createArray;
}


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(array){
  array.pop();
  return array;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(string){
  return string.split('');
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(string){
  var lastString = string.pop();
  return lastString.length;
};


/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(array){
  var number = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] < 10){
      number += array[i];
    }
  }
  return number;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(string){
  var number = 0;
  for(var i = 0; i < string.length; i++){
    if(string[i].length > 10){
      number += 1;
    }
  }
  return number;
}



/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(array){
  var product = 1;
  for(var i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getKeys = function(obj){
  var arr = Object.keys(obj);
  return arr;
};


/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */

var sumAllPositive = function(string){
  var sum = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] >= 1) {
      sum += string[i];
    }
  } return sum;
};


/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(array){
  var threeLess = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i].length <= 3) {
      threeLess += 1;
    }
  } return threeLess;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(array) {
  var amount = array.length;
  return amount;
};


/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  return Object.keys(obj);
};
/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(object) {
  var newArr = []
  for (value in object){
    newArr.push(object[value]);
  }
  return newArr;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  var singleKey = {};
  singleKey[key] = value; 
  return singleKey;
}


/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key){
  var reverseKey;
  reverseKey = {[key]:value};
  return reverseKey;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr){
  var tuple = {[arr[0]]: arr[1]};
  return tuple;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  var tupleReverse = {[arr[1]]: arr[0]};
  return tupleReverse;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr){
 var strKey = {};
 for (var i = 0; i < arr.length; i++) {
   strKey[arr[i]] = 0
 }
return strKey;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  var arr = [];
for(var value in obj) {
  arr.push(obj[value]);
}
return arr;
};


/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  var arr = []
  for (var x in obj) {
    arr.push(x);
  }
  return arr;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var arr = [];

  for (var x in obj){
    var tuples = [];
    tuples.push(x, obj[x]);
    arr.push(tuples);
  }
  return arr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr){
  var obj = {};
    for(var i = 0; i < arr.length; i++){
    obj[arr[i]] = false;
  }
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(keys, values){
  var obj = {};
  for(var i = 0; i < keys.length; i++){
    obj[keys[i]] = values[i];
  }
  return obj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){
  var array = [];
  for(var key1 in obj1){
    var tuple1 = [];
    tuple1.push(key1, obj1[key1]);
    array.push(tuple1);
  }
  for(var key2 in obj2){
    var tuple2 = [];
    tuple2.push(key2, obj2[key2]);
    array.push(tuple2);
  }
  return array;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr){
  var obj = {};
  for(var i = 0; i < arr.length; i++){
  obj[arr[i]] = true;
}
return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr){
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
      newObj[arr[i]] = true;
    } else {
      newObj[arr[i]] = false;
    }
  }
  return newObj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr){
  var truObj = {};
  for(var i = 0; i < arr.length; i++){
    truObj[arr[i]] = true;
  }
  return truObj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(string){
  var obj = {};
  for(var i = 0; i < string.length; i++){
    obj[string[i]] = true;
  }
  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(array){
  var obj = {};
  for(var i = 0; i < array.length; i++){
    obj[array[i]] = array[i].length;
  }
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(string){
  var obj = {}
  for(var i = 0; i < string.length; i++){
    obj[string[i]] = (obj[string[i]] || 0) + 1;
  }
  return obj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(string){
  var obj= {};
  for(i = 0; i < string.length; i++){
    var a = string[i][0];
    var b = string[i][1];
    obj[a] = b;
  }
  return obj;
};


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}

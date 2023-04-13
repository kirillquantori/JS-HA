// ----==== JS School - Lecture 4 HW ====---- 

/**
 * Р РЋriteria for assessment
 * 
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 * 
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====---- 
/**
  * Exercise 1
  *
  * Write a function that returns odd array values.
  * [1,2,3,4] => [1,3]
  */
const getOddValues = numbers => {
  var result = [];
  numbers.forEach(element => {
    if(element % 2 !== 0)result.push(element);
  });
  return result;
};
/**
  * Exercise 2
  *
  * Write a function that returns the smallest value of an array
  * [4,2,10,27] => 2
  */
const getSmallestValue = numbers => {
  var result = null;
  numbers.forEach(element => {
    if(result === null || element < result)result = element;
  });
  return result;
};
/**
  * Exercise 3
  *
  * Write a function that returns the biggest value of an array
  * [5,22,9,43] => 43
  */
const getBiggestValue = numbers => {
  var result = null;
  numbers.forEach(element => {
    if(result === null || element > result)result = element;
  });
  return result;
};
/**
  * Exercise 4
  *
  * Write a function that takes an array of strings as input
  * and returns only those shorter than 20 characters
  *
  *[
  * 'I am a short string',
  * 'I seem to be short too',
  * 'And I am a long string'
  *] => [
  * 'I am a short string',
  *]
  *
  * Use: filter
  */
const getShorterStrings = (strings, characters = 20) => {
  const result = strings.filter(checkString);
  function checkString(str) {
    return str.length < characters;
  }
  return result;
};
/**
  * Exercise 5
  *
  * Write a function that takes the following data as input:
  *
  *[
  * { name: 'shark', likes: 'ocean' },
  * { name: 'turtle', likes: 'pond' },
  * { name: 'otter', likes: 'fish biscuits' }
  *]
  *
  * And returns an array of strings:
  *
  * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
  *
  * Use: map
  */
const getComputedStrings = fish => {
  return fish.map(({ name, likes }) => (name + ' likes ' + likes));
};
/**
  * Exercise 6
  *
  * Write a function that takes 2 objects as input and returns 1 with  
  * common properties. If properties have the same keys use the latter.
  *
  * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
  *
  * We use: ...
  */
const mergeObjects = objects => {
  return {...objects[0], ...objects[1]};
};
/**
  * Exercise 7
  *
  * Write a function that returns the smallest value of an array
  * [5,200,-5,41] => -5
  *
  * Use: operator ... and Math.min
  */
const getSmallestValue2 = numbers => {
  return Math.min(...numbers);
};
/**
  * Exercise 8
  *
  * Write a function that returns odd array values.
  * [77,2,30,51] => [77,51]
  *
  * Use: reduce
  */
const getOddValues2 = numbers => {
  return numbers.reduce((accumulator, currentValue) =>
  currentValue % 2 > 0 ? accumulator + currentValue : accumulator
  );
};
/**
  * Exercise 9
  *
  * Write a function that accepts data from the basket as input in the following form:
  *
  *[
  * {price: 10, count: 2},
  * {price: 100, count: 1},
  * {price: 2, count: 5},
  * {price: 15, count: 6},
  *]
  * where price is the price of the item and count is the quantity.
  *
  * The function should return the total price for this order.
  *
  * Use: reduce
  */
const calculateTotal = products => {
  const initialValue = 0;
  return products.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.count, initialValue);
};
/**
  * Exercise 10
  *
  * Implement a function that has an array of numbers as input and an array of unique values as output
  * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
  *
  * Use: reduce and indexOf
  */
const getUniqueValues = numbers => {
  return numbers.reduce((a, b) => {
    return a.indexOf(b) !== -1 ? a : [...a,b];
  }, []);
};
/**
  * Exercise 11
  *
  * Implement a function whose input is a numeric code of an error, the output is a string with a message
  * 500 => Server Error
  * 401 => Authorization failed
  * 402 => Server Error
  * 403 => Access denied
  * 404 => Not found
  *
  * Use: switch case or object like a map structure
  */
const getErrorMessage = code => {
  var result;
  switch (code) {
    case 500:
      result = 'Server Error';
      break;
    case 401:
      result = ' Authorization failed';
      break;
    case 402:
      result = 'Server Error';
      break;
    case 403:
      result = 'Access denied';
      break;
    case 404:
      result = 'Not found';
      break;
  }
  return result;
};
/**
  * Exercise 12
  *
  * Write a function that returns the 2 smallest values of an array
  * [4,3,2,1] => [1,2]
  *
  * Use: .sort()
  */
const get2SmallestValues = numbers => {
  var result = numbers.sort((a, b) => a - b);
  return [result[0], result[1]];
};
/**
  * Exercise 13
  *
  * Implement a function, at the input of which an object of the following form:
  * {
  * firstName: 'Peter',
  * secondName: 'Vasiliev',
  * patronymic: 'Ivanovich'
  *}
  * output line with the message 'Name: Petr Ivanovich Vasiliev'
  */
const getFullName = user => {
  return 'Name: ' + user.firstname + ' ' + user.secondname + ' ' + user.patronymic;
  return result;
};
/**
  * Exercise 14
  *
  * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
  * a returns an array of the original array, each element of which has been multiplied by a factor:
  *
  * [1,2,3,4], 5 => [5,10,15,20]
  *
  * Use: map
  */
const multiplyTo = (numbers, multiplier) => {
  return numbers.map(a => a * multiplier);
};
/**
  * Exercise 15
  *
  * Implement a function that takes 2 arguments as input: an array and a franchise,
  * and returns a string with the names of the heroes separated by a comma:
  *
  *[
  * {name: "Batman", franchise: "DC"},
  * {name: "Ironman", franchise: "Marvel"},
  * {name: "Thor", franchise: "Marvel"},
  * {name: "Superman", franchise: "DC"}
  *],
  * Marvel
  * => Ironman, Thor
  *
  * Use: filter, map, join
  */
const getРЎharacterNames = (characters, franchise) => {
  return characters.filter(a => a.franchise === franchise).map(a => a.name).join(', ');
};

// ----==== Advanced exercises (8 items) ====----
/**
  * Exercise 16
  *
  * Write a function that returns an array of the smallest row values of a two-dimensional array
  *[
  * [10,1,300,4],
  * [20,2,300,400],
  * [30,3,300,4],
  * [40,4,300,4],
  *]
  * => [1,2,3,4]
  */
const getSmallestRow = numbers => {
  var result = [null, null, null, null];
  for(var i = 0; i < 4; i ++)
  {
    numbers[i].forEach(element => {
        if(result[i] === null || element < result[i])result[i] = element;   
    });
  }
  return result;
};
  /**
  * Exercise 17
  *
  * Write a function that returns an array of the smallest column values of a two-dimensional array
  *[
  * [1,2,3,4],
  * [1,2,3,4],
  * [1,2,30,4],
  * [1,2,3,40],
  *]
  * => [1,2,3,4]
  */
const getSmallestColumn = numbers => {
  var columns = [];
  for(var i = 0; i < 4; i ++)columns.push(numbers.map(function(value,index) { return value[i]; }));
  var result = [null,null,null,null];
  for(var i = 0; i < 4; i ++)
  {
    columns[i].forEach(element => {
        if(result[i] === null || element < result[i])result[i] = element;   
    });
  }
  return result;
};
/**
  * Exercise 18
  *
  * Write a function that returns the 2 biggest value of an array
  * [4,3,2,1] => [4,3]
  */
const get2BiggestValues = numbers => {
  var result = numbers.sort((a, b) => b - a);
  return [result[0], result[1]];
};
/**
  * Exercise 19
  *
  * Write a function that returns the number of vowels in a string in English
  * ( a, e, i, o, u ).
  *
  * 'Return the number (count) of vowels in the given string.' => 15
  */
const getNumberOfVowels = string => {
  var vowels = 'aeiou', count = 0, arr = string.split('');
  arr.forEach(element => {
    if(vowels.indexOf(element) !== -1)count ++;
  });
  return count;
};
/**
  * Exercise 20
  *
  * Write a function that returns an array of two strings where the first element
  * is the original string with uppercase even letters, and the second
  * with capital odd.
  * 'abcdef' => ['AbCdEf', 'aBcDeF']
  */
const getCapitalizedStrings = string => {
  var arr = string.split(''), result1 = '', result2 = '';
  for(var i = 0, l = arr.length; i < l; i ++)
  {
    if(i % 2 === 0)
    {
      result1 += arr[i].toUpperCase();
      result2 += arr[i];
    }
    else
    {
      result1 += arr[i];
      result2 += arr[i].toUpperCase();
    }
  }
  return [result1, result2];
};
/**
  * Exercise 21
  *
  * Write a function that satisfies the following conditions:
  *
  * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
  * the function returns a string that does not contain three identical letters in a row
  * the function removes the minimum number of letters from the string S
  *
  * Examples:
  * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
  * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
  * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
  *
  * Assumptions:
  * N is an integer in the range [1..200,000]
  * S consists only of lowercase letters [a-z]
  */
const getCorrectString = string => {
  var arr = string.split(''), clusters = [], currentLetter = null, currentArray = null, result = '';
  arr.forEach(element => {
    if(element !== currentLetter)
    {
      currentLetter = element;
      if(currentArray !== null)clusters.push(currentArray);
      currentArray = [];
    }
    currentArray.push(currentLetter);
  });
  clusters.push(currentArray);
  for(var i = 0, l = clusters.length; i < l; i ++)if(clusters[i].length > 2)clusters[i].splice(2, clusters[i].length - 2);
  clusters.forEach(element => {
    result += element.join('');
  });
  return result;
}
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getFlattenedArray = numbers => {
  return numbers.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? getFlattenedArray(b) : b);
  }, []);
};
  /**
  * Exercise 23
  *
  * Implement a function that has an array of numbers as input and an array of not unique values as output.
  * 
  * [1, 2, 2, 4, 5, 5] => [2, 5]
  */
const getNotUniqueValues = numbers => {
  var arr = [], result = [];
  for(var i = 0, l = numbers.length; i < l; i ++)
  {
    var found = false;
    for(var j = 0, k = arr.length; j < k; j ++)
    {
        if(numbers[i] === arr[j][0])
        {
            found = true;
            arr[j][1] ++;
            break;
        }
    }
    if(found === false)arr.push([numbers[i], 1]);
  }
  arr.forEach(element => {
    if(element[1] > 1)result.push(element[0]);
  });
  return result;
};
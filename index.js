/**
 * Assignment 1 (Functions)
 *
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Sample array : [1,2,3,4,5]
 * Expected Output : 2,4
 */

/**
 * Finds the second minimum and second maximum value of the array
 * @param {Array<Number>} arr
 * @returns Returns an array with the second minimum and second maximum value of the array
 */
function secondMinMax(arr) {
  arr = arr.sort();
  return [arr[1], arr[arr.length - 2]];
}

// Test
var arr = [6, 2, 9, 4, 7, 2, 7];
var minmax = secondMinMax(arr);
assert(minmax[0] == 2);
assert(minmax[1] == 7);

/**
 * Assignment 2 (Recursion)
 *
 * Write a JavaScript program to get the first n Fibonacci numbers.
 * Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
 */

/**
 * Generates the fibonacci sequence using recursion
 * @param {Number} n     length of the fibonacci sequence
 * @param {Array} arr   array which will contain the response
 * @returns         last number in fibonacci sequence
 */
function fibonacci(n, arr = []) {
  var val = null;
  if (n == 0 || n == 1) {
    val = n;
  } else {
    val = fibonacci(n - 1, arr) + fibonacci(n - 2, null);
  }
  if (arr) {
    arr.push(val);
  }
  return val;
}

// Tests
var f = [];
fibonacci(9, f);
assert(deepEquals(f, [1, 1, 2, 3, 5, 8, 13, 21, 34]));

/**
 * Assignment 3 (Loops and Iteration)
 *
 * Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
 *
 * Student  Marks              The grades are computed as follows :
 * David	  80                  Range   Grade
 * Vinoth	  77                  <60     F
 * Divya	  88                  <70     D
 * Ishitha	95                  <80     C
 * Thomas	  68                  <90     B
 *                              <100    A
 */

function calculateGrades(students) {
  var total = 0;
  for (const stud of students) {
    total += stud.marks;
  }

  const average = total / students.length;
  for (const stud of students) {
    if (stud.marks) {
    }
  }
}

/**
 * Assignment 4 (Math)
 *
 * Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.
 * Test Data :
 * console.log(lcm_more_than_two_numbers([100,90,80,7]));
 * console.log(lcm_more_than_two_numbers([5,10,15,25]));
 * Output :
 * 25200
 * 150
 */

/**
 * Calculates the lcm of the numbers in the given array
 * @param {Array} arr   Array of numbers
 */
function lcm_more_than_two_numbers(arr) {
  return arr.reduce(lcm, 1);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// Tests
assert(lcm_more_than_two_numbers([100, 90, 80, 7]) == 25200);
assert(lcm_more_than_two_numbers([5, 10, 15, 25]) == 150);

/**
 * Assignment 5 (Array)
 *
 * There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
 * Sample array :
 * array1 = [1,0,2,3,4];
 * array2 = [3,5,6,7,8,13];
 * Expected Output : [4, 5, 8, 10, 12, 13]
 */

function arraySum(arr1, arr2) {
  const sum = [];
  for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sum.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return sum;
}

assert(
  deepEquals(arraySum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]), [
    4,
    5,
    8,
    10,
    12,
    13,
  ])
);

/**
 * Assignment 6 (DateTime)
 *
 * Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).
 * Test Data :
 * dt = new Date(2015, 10, 1);
 * console.log(ISO_numeric_date(dt));
 * 7
 */

/**
 * ISO-8601 day of the week
 * @param {Date} date
 * @returns ISO-8601 day of the week
 */
function ISO_numeric_date(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

// Tests
assert(ISO_numeric_date(new Date("05 Aug 1996")) === 1);
assert(ISO_numeric_date(new Date("29 Mar 2021")) === 1);
assert(ISO_numeric_date(new Date("28 Mar 2021")) === 7);
assert(ISO_numeric_date(new Date("1 Nov 2015")) === 7);

/**
 * Assignment 7 (String/Text)
 * Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
 * Test Data :
 * console.log(text_truncate('We are doing JS string exercises.'))
 * console.log(text_truncate('We are doing JS string exercises.',19))
 * console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 * "We are doing JS string exercises."
 * "We are doing JS ..."
 * "We are doing !!"
 */

/**
 * Truncates the string and appends it with the given string
 * @param {*} str   String to be truncated
 * @param {*} n     Max number of characters
 * @param {*} char  Characters to be appended @default '...'
 * @returns
 */
function text_truncate(str, n, char = "...") {
  return n && str.length > n ? str.substring(0, n) + char : str;
}

assert(
  text_truncate("We are doing JS string exercises.") ===
    "We are doing JS string exercises."
);
assert(
  text_truncate("We are doing JS string exercises.", 19) ===
    "We are doing JS str..."
);
assert(
  text_truncate("We are doing JS string exercises.", 15, "!!") ===
    "We are doing JS!!"
);

/**
 * Assignment 8 (Regular Expressions)
 *
 * Write a JavaScript function to print an integer with commas as thousands separators.
 * Test Data :
 * console.log(thousands_separators(1000));
 * "1,000"
 * console.log(thousands_separators(10000.23));
 * "10,000.23"
 * console.log(thousands_separators(100000));
 * "100,000"
 */

/**
 * Returns the number after formatting it with commas at thousands places
 * @param {Number} num
 * @returns string as the formatted number
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

assert(formatNumber(2000) === "2,000");
assert(formatNumber(2004.1312312) === "2,004.1312312");
assert(formatNumber(1232132004.13123) === "1,232,132,004.13123");
assert(formatNumber(-1232132004.13123) === "-1,232,132,004.13123");
assert(formatNumber(0) === "0");

/**
 * Assignment 9 (Document Object Assignment Model (DOM))
 *
 * Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
 * Sample link and text :
 * [On mouse over here bold words of the following paragraph will be highlighted]
 * We have just started this section for the users (beginner to intermediate) who want to work with various JavaScript problems and write scripts online to test their JavaScript skill.
 */
if (typeof document !== "undefined") {
  var link = document.getElementById("link-9");
  var para = document.getElementById("target-paragraph-9");

  const style = document.createElement("style");
  style.textContent = `
    .highlighted-bold-text b {
      background-color:#c0ffc8;
    } 
  `;
  document.head.append(style);

  link.addEventListener("mouseenter", () =>
    para.classList.add("highlighted-bold-text")
  );
  link.addEventListener("mouseleave", () =>
    para.classList.remove("highlighted-bold-text")
  );
} else {
  console.warn("Open index.html in a browser to test assignment 9");
}

/**
 * Assignment 10
 *
 * Write a JavaScript program to draw the given diagram [use moveto() function].
 */
if (typeof document !== "undefined") {
  var c = document.getElementById("canvas-10");
  var ctx = c.getContext("2d");

  // Face
  ctx.moveTo(150, 100);
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);

  // Eyes
  ctx.moveTo(85, 85);
  ctx.arc(80, 85, 5, 0, 2 * Math.PI);
  ctx.moveTo(125, 85);
  ctx.arc(120, 85, 5, 0, 2 * Math.PI);

  // Eye Line?
  ctx.moveTo(75, 85);
  ctx.lineTo(125, 85);

  // Smile
  ctx.moveTo(135, 100);
  ctx.arc(100, 100, 35, 0, Math.PI);

  ctx.stroke();
} else {
  console.warn("Open index.html in a browser to test assignment 10");
}

/**
 * Assignment 11
 * Write a JavaScript function to print all the methods in an JavaScript object.
 */

function getFunctions(obj) {
  return Object.getOwnPropertyNames(obj).filter(
    (k) => typeof obj[k] === "function"
  );
}

assert(deepEquals(getFunctions(Array), ["isArray", "from", "of"]));

/**
 * Assignment 12
 *
 * Write a JavaScript function to check whether given value types are same or not.
 */

function sameType(obj1, obj2) {
  return typeof obj1 === typeof obj2;
}

assert(sameType(new Object(), 1) == false);
assert(sameType(2, 1));

/**
 * Assignment 13 (Merge Sort)
 * @param {Array} arr     Array to be sorted
 * @param {Number} start  Start of the range that has to be sorted, @default 0
 * @param {Number} end    End of the range that has to be sorted, @default length - 1
 */
function sort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  sort(arr, start, mid);
  sort(arr, mid + 1, end);

  var i = start;
  var j = mid + 1;

  const sorted = [];
  while (i <= mid && j <= end) {
    arr[i] < arr[j] ? sorted.push(arr[i++]) : sorted.push(arr[j++]);
  }
  while (i <= mid) {
    sorted.push(arr[i++]);
  }
  while (j <= end) {
    sorted.push(arr[j++]);
  }

  for (i = start; i <= end; i++) {
    arr[i] = sorted[i - start];
  }
}
const arr2 = [2, 9, 2, 6, 3, 6];
sort(arr2);
assert(deepEquals(arr2, [...arr2].sort()));

/**
 * Helper methods
 */

/**
 * Compares the stringified version of the objects
 * @param {*} a1
 * @param {*} a2
 * @returns true if both are equal, false otherwise
 */
function deepEquals(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

function assert(val) {
  if (!val) {
    console.trace("Assertion Failed");
  }
}

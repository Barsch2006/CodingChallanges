/**
 * @type {Array<
 * {title: string;
 * description: string; 
 * testData: string; 
 * testOutput: string;
 * compare: Function;
 * }>}
 * @example ```js
 * [{
 * title: "Task 1",
 * description: "Write a function that returns the sum of two numbers.",
 * testData: "a = 1, b = 2",
 * testCorrect: "3",
 * funktionParameters: "a, b",
 * compare: function(solutionFunction) {
 *  check if the sulutionFunction does what it should do
 *    return solutionFunction(3, 3) === 6;
 * }
 * }];
 * ```
 */
const data = [
    // Beginner Difficulty
    {
        title: "Task 1",
        description: "Write a function that returns the sum of two numbers.",
        testData: "a = 1, b = 2",
        testOutput: "3",
        funktionParameters: "a, b",
        compare: function (solutionFunction) {
            return solutionFunction(7,8) === 15;
        }
    },
    {
        title: "Task 2",
        description: "Write a function that reverses a string.",
        testData: "str = 'Hello'",
        testOutput: "'olleH'",
        funktionParameters: "str",
        compare: function (solutionFunction) {
            return solutionFunction("Bye") === "yeB";
        }
    },
    {
        title: "Task 3",
        description: "Write a function that checks if a number is even.",
        testData: "num = 4",
        testOutput: "true",
        funktionParameters: "num",
        compare: function (solutionFunction) {
            return solutionFunction(12) === true;
        }
    },

    // Easy Difficulty
    {
        title: "Task 4",
        description: "Write a function that finds the maximum value in an array of numbers.",
        testData: "arr = [5, 2, 9, 1, 7]",
        testOutput: "9",
        funktionParameters: "arr",
        compare: function (solutionFunction) {
            return solutionFunction([22, 12, 51, 49, 31]) === 51;
        }
    },
    {
        title: "Task 5",
        description: "Write a function that counts the number of vowels in a string.",
        testData: "str = 'Hello World'",
        testOutput: "3",
        funktionParameters: "str",
        compare: function (solutionFunction) {
            return solutionFunction("Good Bye my Friend") === 5;
        }
    },
    {
        title: "Task 6",
        description: "Write a function that checks if a string is a palindrome.",
        testData: "str = 'racecar'",
        testOutput: "true",
        funktionParameters: "str",
        compare: function (solutionFunction) {
            return solutionFunction("") === true;
        }
    },

    // Intermediate Difficulty
    {
        title: "Task 7",
        description: "Write a function that removes duplicate values from an array.",
        testData: "arr = [1, 2, 2, 3, 4, 4, 5]",
        testOutput: "[1, 2, 3, 4, 5]",
        funktionParameters: "arr",
        compare: function (solutionFunction) {
            return JSON.stringify(solutionFunction([5, 6, 7, 7, 8, 6, 9, 8, 9, 9])) === JSON.stringify([5, 6, 7, 8, 9]);
        }
    },
    {
        title: "Task 8",
        description: "Write a function that calculates the factorial of a number.",
        testData: "num = 5",
        testOutput: "120",
        funktionParameters: "num",
        compare: function (solutionFunction) {
            return solutionFunction(3) === 6;
        }
    },
    {
        title: "Task 9",
        description: "Write a function that checks if a number is a prime number. (num <= 30)",
        testData: "num = 11",
        testOutput: "true",
        funktionParameters: "num",
        compare: function (solutionFunction) {
            return solutionFunction(13) === true && solutionFunction(15) === false;
        }
    }
];

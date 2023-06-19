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
 *    return solutionFunction(3, 3) === 6;
 * }
 * }];
 * ```
 */
const data = [
    {
        title: "Task 1",
        description: "Create a button with the (inner-) text 'Click me!', with the id 'clickme'.",
        testData: "",
        testOutput: "A button with the text 'Click me!' and the id 'clickme'.",
        funktionParameters: "",
        compare: function(solutionFunction) {
            solutionFunction();
            return document.querySelector('#clickme') !== null && document.querySelector('#clickme').innerText === 'Click me!';
        }
    }
];

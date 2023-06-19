/**
 * @type {Array<
 * {title: string;
 * description: string; 
 * testData: string; 
 * testCorrect: string; 
 * solutionData: any, 
 * solutionCorrect: any
 * }>}
 * @example ```js
 * {
 * title: 'Task 1', // Title of the task
 * description: 'lorem ipsum', // Description of the task
 * testData: '[3, 1, 2]', // the params the function will be called with
 * testCorrect: '[1, 2, 3],' // the correct output of the function  the user will see
 * solutionData: [5, 4, 3], // the params the function will be called with
 * solutionCorrect: [3, 4, 5] // the correct output of the function
 * }
 */
const data = [
    {
        title: 'Task 1',
        description: 'Schreibe eine Funktion, die die Länge eines Strings zurückgibt.',
        testData: '"Hello"',
        testCorrect: '5',
        solutionData: '"JavaScript"',
        solutionCorrect: '10',
    },
    {
        title: 'Task 2',
        description: 'Schreibe eine Funktion, die überprüft, ob ein String ein Palindrom ist.',
        testData: '"level"',
        testCorrect: 'true',
        solutionData: '"racecar"',
        solutionCorrect: 'true',
    },
    {
        title: 'Task 3',
        description: 'Schreibe eine Funktion, die das Maximum aus einem Array von Zahlen zurückgibt.',
        testData: '[5, 2, 9, 1, 7]',
        testCorrect: '9',
        solutionData: '[8, 3, 12, 6, 10]',
        solutionCorrect: '12',
    },
    {
        title: 'Task 4',
        description: 'Schreibe eine Funktion, die prüft, ob eine Zahl eine Primzahl ist.',
        testData: '13',
        testCorrect: 'true',
        solutionData: '17',
        solutionCorrect: 'true',
    },
    {
        title: 'Task 5',
        description: 'Schreibe eine Funktion, die das Fakultät einer Zahl berechnet.',
        testData: '5',
        testCorrect: '120',
        solutionData: '7',
        solutionCorrect: '5040',
    }
];

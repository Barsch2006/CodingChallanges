let taskID = 0;

function submitSolution() {
    try {
        let code = document.querySelector("#editor-code-input").value;
        eval(code);
        let param = data[taskID].solutionData;
        let result = mySolution(param);
        let correct = data[taskID].solutionCorrect;
        if (JSON.stringify(result) == JSON.stringify(correct)) {
            document.querySelector('#outputconsole').style.display = 'flex';
            document.querySelector('#outputconsole').innerHTML = `Your solution passed the test!`
            if (taskID < data.length - 1) {
                taskID++;
                loadTask();
            } else {
                document.querySelector('#outputconsole').innerHTML = `Congratulations! You have completed all the tasks!`
            }
        } else {
            document.querySelector('#outputconsole').style.display = 'flex';
            document.querySelector('#outputconsole').innerHTML = `Your solution did not pass the test!`;
        }
    } catch (e) {
        document.querySelector('#outputconsole').style.display = 'flex';
        document.querySelector('#outputconsole').innerHTML = `There is an error in your code! Please check your code and try again.
        <br><br>
        Error: ${e}`;
    }
}

function loadTask() {
    try {
    document.querySelector('#outputconsole').style.display = 'none';
    document.querySelector("#editor-code-input").value = `// ${data[taskID].title}
// ${data[taskID].description}
// Given Data: ${data[taskID].testData}
// Output should be: ${data[taskID].testCorrect}

function mySolution(data) {
let solution = data;

// Your code here

return solution;
}
`;
    } catch (e) {
        alert("Error loading task! Please refresh the page and try again.")
    }
}

loadTask();
syntaxHighlighting();

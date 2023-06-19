let taskID = 0;

document.querySelector('#tasklist').innerHTML = data.map((task, index) => `<li onclick="taskID = ${index}; loadTask();">${task.title}</li>`).join('');

function submitSolution() {
    try {
        let code = document.querySelector("#editor-code-input").value;
        eval(code);
        if (data[taskID].compare(mySolution)) {
            consoleLog('green', 'Your solution passed the test!');
            if (taskID < data.length - 1) {
                taskID++;
                loadTask();
            }
        } else {
            consoleLog('red', 'Your solution did not pass the test!');
        }
    } catch (e) {
        consoleLog('red', `There is an error in your code! Please check your code and try again.<br><br>Error: ${e}`);
    }
}


function consoleLog(mode, message) {
    document.querySelector('#outputconsole').style.display = 'flex';
    document.querySelector('#outputconsole').innerHTML = `<p style="color: ${mode};">${message}</p>`;
}

function loadTask() {
    try {
        document.querySelector('#outputconsole').style.display = 'none';
        document.querySelector("#editor-code-input").value = `// ${data[taskID].title}
// ${data[taskID].description}
// Given Data: ${data[taskID].testData}
// Output should be: ${data[taskID].testOutput}

function mySolution(${data[taskID].funktionParameters}) {
let solution = null;

// Your code here

return solution;
}
`;
syntaxHighlighting();
    } catch (e) {
        console.error(e);
    }
}

localStorage.clear();
loadTask();

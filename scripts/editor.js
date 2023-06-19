/** @type {HTMLTextAreaElement} */
let textarea = document.querySelector('#editor-code-input');

/** @type {HTMLDivElement} */
let syntaxHighlighter = document.querySelector('#editor-code-overlay');

let savingCache = cacher(1000);

textarea.addEventListener('keydown', (key) => {
    if (key.code == 'Space' || key.code == 'Enter') {
        savingCache(() => {
            localStorage.setItem('textarea', textarea.value);
        });
    }
});

function syntaxHighlighting() {
    let lines = textarea.value.split('\n');
    syntaxHighlighter.innerHTML = "";

    let allKeywords = [
        'await', 'break', 'case', 'catch', 'class', 'continue', 'default', 'do', 'else', 'finally',
        'for', 'if', 'import', 'in', 'return', 'switch', 'throw', 'try', 'while', 'with',
        'yield'
    ];

    let allOperators = [
        'async', 'const', 'debugger', 'delete', 'export', 'extends', 'function',
        'in', 'instanceof', 'let', 'new', 'super', 'this', 'typeof', 'var', 'void', 'false', 'true', 'null',
        'undefined', 'class'
    ];

    for (let line of lines) {
        let html = line;

        html = html.replace(/('.*?')/g, `<span class="string">$&</span>`);
        html = html.replace(/(".*?")/g, `<span class="string">$&</span>`);
        html = html.replace(/(`.*?`)/g, `<span class="string">$&</span>`);
        html = html.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, `<span class="comment">$&</span>`);
        html = html.replace(/\/\/.+/g, `<span class="comment">$&</span>`);
        html = html.replace(/(\(|\)|\[|\])/g, `<span class="operator">$&</span>`);
        html = html.replace(/(\{|\})/g, `<span class="keyword">$&</span>`);

        // RegExp for operators
        let operators = new RegExp(`\\b(${allOperators.join('|')})\\b(?![^<]*>|[^<>]*<\/)`, 'g');
        html = html.replace(operators, `<span class="operator">$&</span>`);

        // RegExp for keywords
        let keywords = new RegExp(`\\b(${allKeywords.join('|')})\\b(?![^<]*>|[^<>]*<\/)`, 'g');
        html = html.replace(keywords, `<span class="keyword">$&</span>`);

        html = html.replace(/[0-9]+/gm, `<span class="number">$&</span>`);

        let div = document.createElement('div');

        if (html.trim() == "") {
            html = `<span class="invisible">__</span>`;
        }
        div.innerHTML = html;

        syntaxHighlighter.appendChild(div);
    }

    // render the #editor-linenumbers for the lenght of the textarea
    let editorLineNumbers = document.querySelector('#editor-linenumbers');
    editorLineNumbers.innerHTML = "";
    for (let i = 0; i < textarea.value.split('\n').length; i++) {
        let div = document.createElement('div');
        div.innerText = i + 1;
        editorLineNumbers.appendChild(div);
    }
}

textarea.addEventListener('input', syntaxHighlighting);

function cacher(ms) {
    let lastTimeout = undefined;

    function make(cb) {
        clearTimeout(lastTimeout);
        lastTimeout = setTimeout(() => {
            cb();
        }, ms);
    }

    return make;
}

textarea.value = localStorage.getItem('textarea') || "";

syntaxHighlighting();

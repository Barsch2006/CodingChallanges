function sendChatMessage() {
    let msg = document.querySelector('#copilot-chatform-msg').value;
    if (msg) {
        document.querySelector('#copilot-chat').innerHTML = "<i>Naah, I'm not gonna help you. You're on your own.</i>";
        document.querySelector('#copilot-chatform-msg').value = "";
    }
}

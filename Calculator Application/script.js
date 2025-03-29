let display = document.getElementById("display");
let history = [];

// ✅ Append value to display
function appendToDisplay(value) {
    display.value += value;
}

// ✅ Clear display
function clearDisplay() {
    display.value = '';
}

// ✅ Calculate result and store in history
function calculateResult() {
    try {
        let result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        display.value = result;
        updateHistory();
    } catch (error) {
        alert("Invalid Calculation");
    }
}

// ✅ Update history list
function updateHistory() {
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    history.slice().reverse().forEach((entry) => {
        let li = document.createElement("li");
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

// ✅ Toggle history display
function showHistory() {
    let historyContainer = document.getElementById("history-container");
    historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
}

// ✅ Keyboard support
document.addEventListener('keydown', (event) => {
    if ((event.key >= '0' && event.key <= '9') || "+-*/.".includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

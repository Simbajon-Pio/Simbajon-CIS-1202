const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "*", "/"];
  
    if (operators.includes(input) && operators.includes(lastChar)) {
      return;
    }
  
    display.value += input;
  }
function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    if (display.value.includes("/0")) {
        throw new error("Can't divide by zero");
  }  
  display.value = eval(display.value); 
}catch (error) {
    display.value = " Syntax Error";
  }
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

  function backspace() {
    display.value = display.value.slice(0, -1);
  }
  
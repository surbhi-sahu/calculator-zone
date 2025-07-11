document.addEventListener("DOMContentLoaded", function () {
  let string = "";
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerHTML;

      if (value === '=') {
        try {
          string = eval(string);
          display.value = string;
        } catch {
          display.value = "Error";
          string = "";
        }
      } else if (value === 'C') {
        string = "";
        display.value = "";
      } else {
        string += value;
        display.value = string;
      }
    });
  });
});

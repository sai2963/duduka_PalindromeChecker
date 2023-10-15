let userinput = document.getElementById("card-title");
let button1 = document.getElementById("btn1");
let result = document.getElementById("card-text");

function checkpalindrome() {
  result.textContent = "";
  let input1 = userinput.value.trim();
  if (userinput.value < 1) {
    confirm("enter the string");
    result.textContent = " ";
  } else {
    let input2 = input1.toLowerCase();
    let reversed = input2.split("").reverse().join("");

    if (input2 === reversed) {
      result.textContent = "Wow it's a Palindrome";
    } else  {
      result.textContent = "Sorry it's not a Palindrome";
    } 
  }
}

button1.addEventListener("click", checkpalindrome);

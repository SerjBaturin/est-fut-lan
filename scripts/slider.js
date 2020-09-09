let employees = document.getElementById("employees");
let term = document.getElementById("term");
let outputEmployees = document.getElementById("output-employees");
let outputTerm = document.getElementById("output-term");
outputTerm.innerHTML = term.value;

employees.oninput = function() {
  let val = Number(this.value)
  val > 29 ? outputEmployees.innerHTML = "unlim" : outputEmployees.innerHTML = val;
}

term.oninput = function() {
  outputTerm.innerHTML = this.value;
}
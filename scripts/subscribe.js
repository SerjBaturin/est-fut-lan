const op1 = $("#op1");
const op2 = $("#op2");
const op3 = $("#op3");

const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");

op1.on('click', () => {
  op1.toggleClass('subscribe__option--choosen')
  check1.toggleAttribute("checked")
});
op2.on('click', () => {
  op2.toggleClass('subscribe__option--choosen')
  check2.toggleAttribute("checked")
});
op3.on('click', () => {
  op3.toggleClass('subscribe__option--choosen')
  check3.toggleAttribute("checked")
});


const op1 = $("#op1");
const op2 = $("#op2");
const op3 = $("#op3");

const op1Toggler = $("#op1-toggler");
const op2Toggler = $("#op2-toggler");
const op3Toggler = $("#op3-toggler");

const op1Switcher = $("#op1-switcher");
const op2Switcher = $("#op2-switcher");
const op3Switcher = $("#op3-switcher");

const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");

op1Toggler.on("click", () => {
  $("#descr1").slideToggle();
});
op1Switcher.on("click", () => {
  op1.toggleClass("subscribe__option--choosen");
  check1.toggleAttribute("checked");
});
op2Toggler.on("click", () => {
  $("#descr2").slideToggle();
});
op2Switcher.on("click", () => {
  op2.toggleClass("subscribe__option--choosen");
  check2.toggleAttribute("checked");
});
op3Toggler.on("click", () => {
  $("#descr3").slideToggle();
});
op3Switcher.on("click", () => {
  op3.toggleClass("subscribe__option--choosen");
  check3.toggleAttribute("checked");
});

let card = $(".subscribe__list__item-option");

card.click("click", (e) => {
  e.currentTarget.style.background = "#fff";
  e.currentTarget.style.color = "#000";
  e.currentTarget.style.border = "1px solid #000";
});

let card = $(".subscribe__list__item");
let state = true;
card.click("click", (e) => {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.color = "#000";
    e.currentTarget.style.border = "1px solid #000";
    e.currentTarget.children[1].children[5].children[0].removeAttribute(
      "checked",
    );
});

const addClass = (el, name) => el.classList.add(name);
const deleteClass = (el, name) => el.classList.remove(name);
const allIcons = $(".all__icons__list");
const item = $(".all__icons__list__item");
const info = $(".all__icons__list__info")[0];
const infoText = [
  "<ul class='all__icons__list__info__text'><li>Control and manage current issues<br>at the bodyshop</li><hr><li>Record operations and access them<br>anytime when needed</li><hr><li>Schedule the bodyshop work</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Contactless service, electronic paperwork<br>& parts preordering reducing repair time</li><hr><li>Automatic notifications during repair process</li><hr><li>Automatic follow-up,<br>rating requests and up-sales</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Convenient parts & invoice recording<br>using in-app scanner</li><hr><li>Automatic search for cheaper parts</li><hr><li>Resources management (soon)</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Supporting the most common estimating systems like CCC, Mitchell and Audatex</li><hr><li>Diagnostic scanners reports importing</li><hr><li>Invoices for QuickBooks, seamless VoIP communications via Asterisk</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Photo documentation process is guided by insurance company’s template as well as estimate lines are clear even for new employees</li><hr><li>Damage photos and reports<br>are organized and accessed easily</li><hr><li>X-ray mode makes small dents show up</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Convenient and visual staff assignment</li><hr><li>Designed for each and every bodyshop worker with corresponding functionality</li><hr><li>Make supplements, text & voice memos easily to keep your teammates informed</li></ul>",
  "<ul class='all__icons__list__info__text'><li>New assignments are instantly imported<br>in EstVis from insurance companies</li><hr><li>Work Authorizations are automatically generated in accordance with insurance company’s requirements</li><hr><li>One-touch insurer’s documentation upload</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Control current KPIs</li><hr><li>Reveal bottlenecks and optimize your business</li><hr><li>Produce key data reports</li></ul>",
];

// Классы, динамически добавляемые к HTML
const classes = [
  "all__icons__list__item--choosen",
  "all__icons__item__img--choosen",
  "all__icons__item__descr--choosen",
  "all__icons__list__info__text--choosen ",
];

// Функция добавляет классы к элементам li, svg, p
const start = (i) => {
  let ar = [0, 1, 2, 4, 7, 6, 5, 3];

  let timer = setInterval(() => {
    

    deleteClass($(".all__icons__list__item")[ar[i]], classes[0]);
    deleteClass($(".all__icons__item__img")[ar[i]], classes[1]);
    deleteClass($(".all__icons__item__descr")[ar[i]], classes[2]);

    i++;
    i === 8 ? (i = 0) : i;

    addClass($(".all__icons__list__item")[ar[i]], classes[0]);
    addClass($(".all__icons__item__img")[ar[i]], classes[1]);
    addClass($(".all__icons__item__descr")[ar[i]], classes[2]);

    info.innerHTML = infoText[i];

    setTimeout(() => {
      deleteClass($(".all__icons__list__item")[ar[i]], classes[0]);
      deleteClass($(".all__icons__item__img")[ar[i]], classes[1]);
      deleteClass($(".all__icons__item__descr")[ar[i]], classes[2]);
    }, 2450);
  }, 2500);

  // Останавливает таймер и запускает события при наведении на элемент
  item.on("mouseenter", (e) => {
    let infoIndex = e.currentTarget.dataset.info;
    clearInterval(timer);
    deleteClass($(".all__icons__list__item")[ar[i]], classes[0]);
    deleteClass($(".all__icons__item__img")[ar[i]], classes[1]);
    deleteClass($(".all__icons__item__descr")[ar[i]], classes[2]);
    addClass(e.currentTarget, classes[0]);
    addClass(e.currentTarget.children[0], classes[1]);
    addClass(e.currentTarget.children[1], classes[2]);
    info.innerHTML = infoText[infoIndex];
  });
};

start(0);

item.on("mouseleave", (e) => {
  let infoIndex = e.currentTarget.dataset.info;
  start(infoIndex);
});


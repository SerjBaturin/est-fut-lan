const addClass = (el, name) => el.classList.add(name)
const deleteClass = (el, name) => el.classList.remove(name)
const item = $(".all__icons__list__item")
const info = $(".all__icons__list__info")[0]
const infoText = [
  "<ul class='all__icons__list__info__text'><li>Control and manage current issues<br>at the bodyshop</li><li>Record operations and access them<br>anytime when needed</li><li>Schedule the bodyshop work</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Contactless service, electronic paperwork<br>& parts preordering reducing repair time</li><li>Automatic notifications during repair process</li><li>Automatic follow-up,<br>rating requests and up-sales</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Convenient parts & invoice recording<br>using in-app scanner</li><li>Automatic search for cheaper parts</li><li>Resources management (soon)</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Supporting the most common estimating systems like CCC, Mitchell and Audatex</li><li>Diagnostic scanners reports importing</li><li>Invoices for QuickBooks, seamless VoIP communications via Asterisk</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Photo documentation process is guided by insurance company’s template as well as estimate lines are clear even for new employees</li><li>Damage photos and reports<br>are organized and accessed easily</li><li>X-ray mode makes small dents show up</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Convenient and visual staff assignment</li><li>Designed for each and every bodyshop worker with corresponding functionality</li><li>Make supplements, text & voice memos easily to keep your teammates informed</li></ul>",
  "<ul class='all__icons__list__info__text'><li>New assignments are instantly imported<br>in EstVis from insurance companies</li><li>Work Authorizations are automatically generated in accordance with insurance company’s requirements</li><li>One-touch insurer’s documentation upload</li></ul>",
  "<ul class='all__icons__list__info__text'><li>Control current KPIs</li><li>Reveal bottlenecks and optimize your business</li><li>Produce key data reports</li></ul>",
]

// Классы, динамически добавляемые к HTML 
const classes = ["all__icons__list__item--choosen", "all__icons__item__img--choosen", "all__icons__item__descr--choosen"]

// Генератор случайных чисел 
const random = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Функция добавляет классы к элементам li, svg, p
const start = () => {
  let ar = [0,1,2,4,7,6,5,3]
  let i = 0
    let timer = setInterval(() => {

      i++
      i === 8 ? i = 0 : i
      deleteClass($(".all__icons__list__item")[0], classes[0])
      deleteClass($(".all__icons__item__img")[0], classes[1])
      deleteClass($(".all__icons__item__descr")[0], classes[2])
      
      addClass($(".all__icons__list__item")[ar[i]], classes[0])
      addClass($(".all__icons__item__img")[ar[i]], classes[1])
      addClass($(".all__icons__item__descr")[ar[i]], classes[2])
      

      info.innerHTML = infoText[i]
      
      setTimeout(()=> {
        deleteClass($(".all__icons__list__item")[ar[i]], classes[0])
        deleteClass($(".all__icons__item__img")[ar[i]], classes[1])
        deleteClass($(".all__icons__item__descr")[ar[i]], classes[2])
      }, 2900)
    }, 3000 )

    // Останавливает таймер и запускает события при наведении на элемент
    item.on("mouseenter", (e) => {
      let infoIndex = e.currentTarget.dataset.info
      clearInterval(timer)
        deleteClass($(".all__icons__list__item")[ar[i]], classes[0])
        deleteClass($(".all__icons__item__img")[ar[i]], classes[1])
        deleteClass($(".all__icons__item__descr")[ar[i]], classes[2])
      addClass(e.currentTarget, classes[0])
      addClass(e.currentTarget.children[0], classes[1])
      addClass(e.currentTarget.children[1], classes[2])
      info.innerHTML = infoText[infoIndex]
    })

    // Очищает стили при выходе курсора из элемента
    item.on("mouseleave", (e) => {
      deleteClass(e.currentTarget, classes[0])
      deleteClass(e.currentTarget.children[0], classes[1])
      deleteClass(e.currentTarget.children[1], classes[2])
    })
}

start()

$('.all__icons__list').on('mouseleave', () => {
  addClass($(".all__icons__list__item")[0], classes[0])
  addClass($(".all__icons__item__img")[0], classes[1])
  addClass($(".all__icons__item__descr")[0], classes[2])
  info.innerHTML = infoText[0]
  start()
})
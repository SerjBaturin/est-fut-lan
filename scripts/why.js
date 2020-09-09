let items = $('.why__list__item')
let imgs = $('.why__img')

$(window).scroll(function(){
  items.map((i, item) => {
    if ( $(this).scrollTop() > items.offset().top - 700 ) {
      setTimeout(() => {
        item.classList.add('why__list__item--animate');
      }, 100 * i)
    }
  })
  imgs.map((i, img) => {
    if ( $(this).scrollTop() > imgs.offset().top - 1300 ) {
      setTimeout(() => {
        img.classList.add('why__img--animate');
      }, 500 )
    }
  })
});
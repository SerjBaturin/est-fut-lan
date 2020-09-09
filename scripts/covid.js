let covidBtn = $(".covid")
let close = $(".covid--close")

close.on('click', (e) => {
    e.stopPropagation()
    covidBtn.css({visibility: 'hidden'})
})
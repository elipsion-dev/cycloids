let startx = (window.innerHeight + 250) / 2, starty = window.innerWidth / 2, ang = 0, epiVal = 5, hypoVal = 5, x, y;

function epicycloid(k, r) {
    x = r * (k - 1) * Math.cos(ang) - r * Math.cos((k - 1) * ang);
    y = r * (k - 1) * Math.sin(ang) - r * Math.sin((k - 1) * ang);
    $('body').append(`<div style='position: absolute; top:${startx + x}px; left:${starty - y}px; height: 5px; width: 5px; background-color: aqua; border-radius: 50%; z-index: -1'></div>`);
    ang = ang + 3
}

function hypocycloid(k, r) {
    x = r * (k - 1) * Math.cos(ang) + r * Math.cos((k - 1) * ang);
    y = r * (k - 1) * Math.sin(ang) - r * Math.sin((k - 1) * ang);
    $('body').append(`<div style='position: absolute; top:${startx + x}px; left:${starty - y}px; height: 5px; width: 5px; background-color: lawngreen; border-radius: 50%;'></div>`);
    ang = ang + 3
}

//=================================================
//Epicycloid buttons
//=================================================
$('#epi1').on('click', function () {
    setInterval(epicycloid, .01, 1.3, window.innerHeight / 3)
    setTimeout(align, 1000)
})
$('#epi2').on('click', function () {
    setInterval(epicycloid, .01, 1.7, window.innerHeight / 5)
    setTimeout(align, 1000)
})
$('#epi3').on('click', function () {
    setInterval(epicycloid, .01, 3.1, window.innerHeight / 7)
    setTimeout(align, 1000)
})
$('#epi4').on('click', function () {
    setInterval(epicycloid, .01, 4.2, window.innerHeight / 12)
    setTimeout(align, 1000)
})
$('#epi5').on('click', function () {
    setInterval(epicycloid, .01, 5.1, window.innerHeight / 14)
    setTimeout(align, 1000)
})
$('#epi6').on('click', function () {
    setInterval(epicycloid, .01, 9.5, window.innerHeight / 21)
    setTimeout(align, 1000)
})
$('#epiRange').on('change', function () {
    epiVal = this.value
    $('#value').text(this.value)
})
$('#tryEpi').on('click', function () {
    setInterval(epicycloid, .01, epiVal, window.innerHeight / ((epiVal * 2) + 2));
    setTimeout(align, 1000)
})


//=================================================
//Hypocycloid buttons
//=================================================
$('#hypo1').on('click', function () {
    setInterval(hypocycloid, .001, 1.3, window.innerHeight / 3)
    setTimeout(align, 1000)
})
$('#hypo2').on('click', function () {
    setInterval(hypocycloid, .001, 2.1, window.innerHeight / 5)
    setTimeout(align, 1000)
})
$('#hypo3').on('click', function () {
    setInterval(hypocycloid, .001, 2.8, window.innerHeight / 6)
    setTimeout(align, 1000)
})
$('#hypo4').on('click', function () {
    setInterval(hypocycloid, .001, 4.1, window.innerHeight / 9)
    setTimeout(align, 1000)
})
$('#hypo5').on('click', function () {
    setInterval(hypocycloid, .001, 5.9, window.innerHeight / 13)
    setTimeout(align, 1000)
})
$('#hypo6').on('click', function () {
    setInterval(hypocycloid, .001, 9.5, window.innerHeight / 25)
    setTimeout(align, 1000)
})
$('#hypoRange').on('change', function () {
    hypoVal = this.value
    $('#value2').text(this.value)
})
$('#tryHypo').on('click', function () {
    setInterval(hypocycloid, .01, hypoVal, window.innerHeight / ((hypoVal * 2) + 2));
    setTimeout(align, 1000)
})

//=================================================
//Extra Button Functions & Align Screen Function
//=================================================
$('.reload').on('click', function () {
    window.scrollTo(0, 0)
    location.reload()
})
$('.btn').on('mousedown', function () {
    $(this).css({
        border: 'none'
    })
})
$('.btn').on('mouseup', function () {
    $(this).css({
        border: '4px groove violet'
    })
})
function align() {
    window.scrollTo(0, 1000)
}
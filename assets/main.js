function onScroll() {
 if (scrollY > 0) {
     navigation.classList.add('scroll')
 } else {
     navigation.classList.remove('scroll')
 }
}

function openMenu () {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function ScrollReveal() {
    var options = {
        reveal: function () {}
    }
    return options
}

var options = ScrollReveal()
ScrollReveal().reveal('#home');
var propMenu = {
    body: document.getElementsByTagName('body')[0],
    burgerMenu: document.getElementById('burgermenu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .navbar li a'),
};

var metMenu = {
    inicio: function () {
        propMenu.burgerMenu.addEventListener('click', metMenu.toggleMenu);
    },
    toggleMenu: function () {
        propMenu.body.classList = 'movil-nav'
        if (propMenu.menu_activo == false) {
            propMenu.menu_activo = true
        } else {
            propMenu.menu_activo = false;
            propMenu.body.className = propMenu.body.className.replace = ''
        }
    }
}

metMenu.inicio()

const submenuLinkItems = document.querySelectorAll('.submenu')

submenuLinkItems.forEach((item) => {
    function onSubmenuClick(event) {
        const submenu = event.target.closest('.submenu')

        if (submenu.classList.contains('submenu--active')) {
            submenu.classList.remove('submenu--active')
        } else {
            const activeSubmenu = document.querySelector('.submenu--active')

            if (activeSubmenu) {
                activeSubmenu.classList.remove('submenu--active')
            }
            submenu.classList.add('submenu--active')
        }
    }
    item.addEventListener('click', onSubmenuClick)
})

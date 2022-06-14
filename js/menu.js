document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  function onResize() {
    const submenuActive = document.querySelector(
      '.submenu--active .submenu__items'
    )

    if (submenuActive) {
      const heightActivemenuHeight = window
        .getComputedStyle(submenuActive, ':after')
        .getPropertyValue('height')

      if (heightActivemenuHeight) {
        document
          .querySelector('body')
          .style.setProperty('--active-menu-height', heightActivemenuHeight)
      }
    }
  }

  onResize()

  window.addEventListener('resize', onResize)

  const menuTitle = document.querySelector('.menu-title')
  const menu = document.querySelector('.menu')
  const submenuLinkItems = document.querySelectorAll('.submenu')

  menuTitle.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
    const activeSubmenu = document.querySelector('.submenu--active')
    if (activeSubmenu) {
      activeSubmenu.classList.remove('submenu--active')
    }
  })

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
        onResize()
      }
    }
    item.addEventListener('click', onSubmenuClick)
  })
}

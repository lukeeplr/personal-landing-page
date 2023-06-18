const mobileNav = () => {
    const headerButton = document.querySelector('.header__bars')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    //state
    let isNavOpen = false
    
    headerButton.addEventListener('click', () => {
        isNavOpen = !isNavOpen
        if (isNavOpen) {
            mobileNav.style.display = 'flex'
            document.body.style.overflowY = 'hidden'
        } else {
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isNavOpen = false
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
        })
    })
}

export default mobileNav
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenuIcon = document.querySelector('.menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenuIcon.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleAsideCart)

function toggleDesktopMenu() {
    const isMenuEmailClosed = aside.classList.contains('inactive')

    if (!isMenuEmailClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}
function toggleAsideCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}
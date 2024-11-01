const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenuIcon = document.querySelector('.menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenuIcon.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleAsideCart)

function toggleDesktopMenu() {
    const isMenuEmailClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isMenuEmailClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
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

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'TV',
    price: 220,
    img: 'https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Laptop',
    price: 420,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg')
    
        productInfoFigure.append(productImgCart)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
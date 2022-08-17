const quantitiesElement = document.getElementById('quantities-number')
const cartQuantities = document.getElementsByClassName('cart-quantities')[0]


document.getElementById('quantities-minus').addEventListener('click', () => {
    const quantities = quantitiesElement.innerHTML
    if (quantities === '0') {
        return ''
    } else {
        quantitiesElement.innerHTML = parseInt(quantities) - 1
    }
})

document.getElementById('quantities-plus').addEventListener('click', () => {
    const quantities = quantitiesElement.innerHTML
    quantitiesElement.innerHTML = parseInt(quantities) + 1
})


document.querySelector('.add-cart').addEventListener('click', () => {
    const actualValue = cartQuantities.innerHTML
    const value = parseInt(actualValue) + 1
    cartQuantities.innerHTML = value
})

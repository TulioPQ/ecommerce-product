const largeImage = document.querySelector('.large-image img')
const largeImageLightBox = document.querySelector('.main-image img')


document.querySelectorAll('.thumb-image').forEach(thumb => {
    thumb.addEventListener('click', e => {
        const file = e.target.src.replace('-thumbnail', '')
        document.querySelectorAll('.selected').forEach(item => {
            item.classList.remove('selected')
        })
        const selectedThumb = thumb.classList[1]
        document.querySelectorAll(`.${selectedThumb}`).forEach(item => {
            item.parentElement.classList.add('selected')
            item.classList.add('selected')
        })
        largeImage.setAttribute('src', file)
        largeImageLightBox.setAttribute('src', file)
    })
})

document.querySelector('.large-image').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'flex'
})

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none'
})

document.querySelector('.lightbox-button.left').addEventListener('click', () => {
    const actualImg = largeImageLightBox.getAttribute('src')
    const imgNumber = parseInt(actualImg[actualImg.length-5])
    console.log(actualImg.replace(`${imgNumber}.jpg`,`${imgNumber -1}.jpg`))
    if (imgNumber === 1){
        return ''
    } else {
        largeImageLightBox.setAttribute('src', actualImg.replace(`${imgNumber}.jpg`,`${imgNumber -1}.jpg`))
        largeImage.setAttribute('src', actualImg.replace(`${imgNumber}.jpg`,`${imgNumber -1}.jpg`))
    }
})

document.querySelector('.lightbox-button.right').addEventListener('click', () => {
    const actualImg = largeImageLightBox.getAttribute('src')
    const imgNumber = parseInt(actualImg[actualImg.length-5])
    console.log(actualImg.replace(`${imgNumber}.jpg`,`${imgNumber -1}.jpg`))
    if (imgNumber === 4){
        return ''
    } else {
        largeImageLightBox.setAttribute('src', actualImg.replace(`${imgNumber}.jpg`,`${imgNumber +1}.jpg`))
        largeImage.setAttribute('src', actualImg.replace(`${imgNumber}.jpg`,`${imgNumber +1}.jpg`))
    }
})
const imgP = document.getElementById('imgP')
const card= document.getElementById('card')

card.addEventListener('click', () => {
    imgP.classList.add('show')
})

imgP.addEventListener('click', () => {
    imgP.classList.remove('show')
})
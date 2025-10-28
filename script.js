const simpleBtn = document.querySelector('.simple-btn')
const searchBtn = document.querySelector('.search-btn')
const sharingBtn = document.querySelector('.sharing-btn')
const simpleTab = document.querySelector('.simple-booking')
const speedyTab = document.querySelector('.speedy')
const sharingTab = document.querySelector('.sharing')
const question = document.querySelector('.question')
const answer = document.querySelector('.ans')
const form = document.querySelector('form')
const emailInput = document.querySelector('#email')
const inputErr = document.querySelector('.error')
const errIcon = document.querySelector('.error-img')


simpleBtn.addEventListener("click", () => {
    simpleTab.style.display = 'flex'
    speedyTab.style.display = 'none'
    sharingTab.style.display = 'none'

})

searchBtn.addEventListener("click", () => {
    simpleTab.style.display = 'none'
    speedyTab.style.display = 'flex'
})

sharingBtn.addEventListener("click", () => {
    simpleTab.style.display = 'none'
    speedyTab.style.display = 'none'
    sharingTab.style.display = 'flex'
})


question.addEventListener("click", () => {
    answer.classList.toggle('show-answer')
})


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        inputErr.style.opacity = '1'
        errIcon.style.opacity = '1'
        emailInput.classList.add('red-border')
    }
    else {
        inputErr.style.opacity = '0'
        errIcon.style.opacity = '0'
        emailInput.classList.remove('red-border')
        emailInput.value = ''
    }
})
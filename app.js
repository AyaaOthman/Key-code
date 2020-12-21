const label = document.querySelector('.main')
const container = document.querySelector('.container')
const eventKey = document.querySelector('.key')
const eventKeyCode = document.querySelector('.key-code')
const eventCode = document.querySelector('.event-code')
window.addEventListener('keydown', (e)=>{
label.style.transform = ('translateY(-150px)')
container.classList.remove('hide')
eventCode.textContent = e.code
eventKeyCode.textContent =e.keyCode
eventKey.textContent = e.key
})
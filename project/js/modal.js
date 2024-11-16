const modal = document.querySelector('.modal')
const triggerButton = document.querySelector('.modal__trigger')
const closeButton = document.querySelector('.modal__close')

const openModal = () => {
    modal.style.display = 'block'
    d
}

const closeModal = () => {
    modal.style.display = 'none'
}

triggerButton.onclick = () => openModal()
closeButton.onclick = () => closeModal()

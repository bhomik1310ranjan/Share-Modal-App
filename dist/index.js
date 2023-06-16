const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('scale-0');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
};

const closeModal = () => {
    modal.classList.add('scale-0');
    overlay.classList.add('opacity-0', 'pointer-events-none');
};

const closeModalUsingEsc = (event) => {
    if(event.key === 'Escape' && !modal.classList.contains('scale-0') && !overlay.classList.contains('opacity-0', 'pointer-events-none')){
        closeModal();
    }
};

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalUsingEsc);

const themeToggler = document.querySelector(".theme-toggler");

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(div => {
  div.addEventListener('click', () => {
    const modal = document.querySelector(div.dataset.modalTarget)
    openModal(modal)
  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//date format to set as today
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;


function App() {
  return (
    <div className="App">
     
    </div>
  );
}
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('light-theme-page');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

export default App;

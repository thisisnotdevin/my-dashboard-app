
const themeToggler = document.querySelector(".theme-toggler");


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

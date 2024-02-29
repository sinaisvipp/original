const urlParams = new URLSearchParams(window.location.search);
const hasHParam = urlParams.has('h') && urlParams.get('h') === '1';

function insertTopBar() {
	const body = document.querySelector('body');
	const topBar = `<div class="top-bar">
<div class="container-layout">
  <div class="top-bar-content">
    <a href="./index.html">
      <div class='item'>
      <i class='bx bx-left-arrow-alt'></i>
        <span>
        Voltar Ao APP
        </span>
      </div>
    </a>
    <a href="./index.html">
      <div class='item'>
        <i class="bx bxs-home "></i>
        <span>
        Home
        </span>
      </div>
    </a>
    <a href="./aula.html">
      <div class='item '>
      <i class='bx bxs-graduation'></i>
        <span>
        Aprenda a Usar
        </span>
      </div>
    </a>
  </div>
</div>
</div>`;
	body.insertAdjacentHTML('beforeend', topBar);
}

if (!hasHParam) {
	insertTopBar(); // Insira a top bar somente se não houver 'h=1' na URL
}

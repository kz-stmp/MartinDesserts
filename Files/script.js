const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var receitas = document.getElementById('menuu');
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        const text = `<div class='receitas'>
                        <h1>Receitas</h1>
                        <h2 class='mb-n3'>DOCES</h2>
                        <div class="d-flex justify-content-center mt-0"><hr class="l1"></div>
                        <p><a href="#">Bolos</a></p>
                        <p><a href="#">Cupcakes</a></p>
                        <p><a href="#">Tortas</a></p>
                        <p><a href="#">Pudim</a></p>

                        <h2 class='mb-n3'>SALGADOS</h2>
                        <div class="d-flex justify-content-center mt-0"><hr class="l1"></div>
                        <p><a href="#">Chamussas</a></p>
                        <p><a href="#">Rissóis</a></p>
                        <p><a href="#">Cochinhas</a></p>
                        <p><a href="#">Croquettes</a></p>
                      </div>
                     `

        receitas.innerHTML = text;

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;

        receitas.innerHTML = '';
    }
});
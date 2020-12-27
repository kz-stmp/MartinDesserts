const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var receitas = document.getElementById('menuu');
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        const text = `<div class='receitas'>
                        <h2 class='mb-n3'>DOCES</h2>
                        <div class="d-flex justify-content-center mt-0"><hr class="l1"></div>
                        <p><a href="bolos.html">Bolos</a></p>
                        <p><a href="#">Cupcakes</a></p>
                        <p><a href="#">Tortas</a></p>
                        <p><a href="#">Pudim</a></p>

                        <h2 class='mb-n3'>SALGADOS</h2>
                        <div class="d-flex justify-content-center mt-0"><hr class="l1"></div>
                        <p><a href="#">Chamussas</a></p>
                        <p><a href="#">Rissóis</a></p>
                        <p><a href="#">Cochinhas</a></p>
                        <p><a href="#">Croquettes</a></p>

                        <h2 class='mb-n3'>SMOOTHIES</h2>
                        <div class="d-flex justify-content-center mt-0"><hr class="l1"></div>
                        <p><a href="#">Smoothies com leite</a></p>
                        <p><a href="#">Smoothies com iogurte</a></p>
                        <p><a href="#">Smoothies sem leite ou iogurte</a></p>
                      </div>
                     `

        receitas.innerHTML = text;

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;

        receitas.innerHTML = '';
    }
});

const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const opt5 = document.getElementById('opt5');

var price = document.getElementById('preço');

opt1.addEventListener('click', () => {
    price.innerHTML= '200DA';
});
opt2.addEventListener('click', () => {
    price.innerHTML= '500DA';
});
opt3.addEventListener('click', () => {
    price.innerHTML= '700DA';
});
opt4.addEventListener('click', () => {
    price.innerHTML= '800DA';
});
opt5.addEventListener('click', () => {
    price.innerHTML= '1000DA';
});
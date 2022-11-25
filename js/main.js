const div = document.querySelector('.div-paradas');
const btns = document.querySelector('.btns')
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function getTimeForSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    });
}

let vezes = 1;
let seconds = 0;
let timer;
function iniciaRelogio() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeForSeconds(seconds);
    }, 1000)
}

// pegando evento de click   
iniciar.addEventListener('click', function (e) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = 'black';
})
pausar.addEventListener('click', function (e) {
    clearInterval(timer);
    let parada = document.createElement('p');
    parada.innerHTML = `${vezes}° Parada foi  ${getTimeForSeconds(seconds)}`;
    div.append(parada);
    relogio.style.color = 'red';
    div.style.display = 'block';
    vezes++;
})
zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    while (div.firstChild){
        div.removeChild(div.firstChild)
    }
    div.style.display = 'none';
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
    seconds = 0;
    vezes = 1;
})


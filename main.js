const form = document.getElementById('form');
const nome = [];
const numero = [];

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputnome = document.getElementById('inputnome');
    const inputnumero = document.getElementById('inputnumero');
    
    if (nome.includes(inputnome.value)) {
        alert(`Já existe um contato chamado salvo chamado ${inputnome.value}`);
    } else {
        nome.push(inputnome.value);
        numero.push(parseInt(inputnumero.value));
        let linha = '<tr>';
        linha += `<td>${inputnome.value}</td>`;
        linha += `<td>${inputnumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}



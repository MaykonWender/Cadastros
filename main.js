const form = document.getElementById('form-atividade');
let linhas = '';


form.addEventListener('submit', function(e){ 
    e.preventDefault();
    adicionaTelefone();

    
})
function adicionaTelefone (){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTelefoneAtividade = document.getElementById('telefone-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputTelefoneAtividade.value}</td>`;
    linha += '</td>'
    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputTelefoneAtividade.value = '';
    inputNomeAtividade.value = '';
}
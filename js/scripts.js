const form = document.getElementById('form-cadastro');
const tabelaImc = document.getElementById('tabela-imc').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');

    const nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let status = '';

        if (imc < 18.5) {
            status = 'Magreza';
        } else if (imc < 25) {
            status = 'Saudável';
        } else if (imc < 30) {
            status = 'Sobrepeso';
        } else if (imc < 35) {
            status = 'Obesidade I';
        } else if (imc < 40) {
            status = 'Obesidade II';
        } else {
            status = 'Obesidade III';
        }

        const newRow = tabelaImc.insertRow();
        newRow.insertCell().textContent = nome;
        newRow.insertCell().textContent = peso;
        newRow.insertCell().textContent = altura;
        newRow.insertCell().textContent = imc;
        newRow.insertCell().textContent = status;
        newRow.insertCell().innerHTML = '<div class="button-container"><button class="aumentar-peso">+ Peso</button> <button class="diminuir-peso">- Peso</button> <button class="excluir">Excluir</button></div>';

        form.reset();
    }
});

const btnRemoverMaiorIMC = document.querySelector("#remover-maior-imc");
btnRemoverMaiorIMC.addEventListener("click", removerMaiorIMC);

const btnRemoverMenorIMC = document.querySelector("#remover-menor-imc");
btnRemoverMenorIMC.addEventListener("click", removerMenorIMC);

function removerMaiorIMC() {
    let trs = document.querySelectorAll("tr");
    if (trs.length > 1) {
        let maior = trs[1]; 
        let maiorIMC = parseFloat(maior.querySelectorAll("td")[3].innerText);
        for (let i = 1; i < trs.length; i++) { 
            let tds = trs[i].querySelectorAll("td");
            let IMC = parseFloat(tds[3].innerText);
            if (IMC > maiorIMC) {
                maior = trs[i];
                maiorIMC = IMC;
            }
        }
        maior.remove(); 
    }else{
        alert("Não há pessoas para remover!")
    }
}
function removerMenorIMC() {
    let trs = document.querySelectorAll("tr");
    if (trs.length > 1) {
        let menor = trs[1]; 
        let menorIMC = parseFloat(menor.querySelectorAll("td")[3].innerText);
        for (let i = 1; i < trs.length; i++) { 
            let tds = trs[i].querySelectorAll("td");
            let IMC = parseFloat(tds[3].innerText);
            if (IMC < menorIMC) {
                menor = trs[i];
                menorIMC = IMC;
            }
        }
        menor.remove(); 
    }else{
        alert("Não há pessoas para remover!")
    }
}
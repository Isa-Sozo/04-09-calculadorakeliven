// funções para adicinar os numeros no display
function addNumero(numero){
    document.getElementById('display').value += caracter 
}
//funçõ para limpar dislay quando clicar em c
function limparDisplay(){
    document.getElementById('display').value = ''
}

//apagar o caracter digitado
function apagar(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0, -1)

}

//funçao para os operadores
function operadores(op){
    if(numero !== ''){
        operadorAtual = op
        document.getElementById('display').value = ''
    }
}
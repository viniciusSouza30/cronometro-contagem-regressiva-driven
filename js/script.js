const second = 1000;
const minuto = 60 * second;
const hora = 60 * minuto;
const dia = 24 * hora
let diferenca;
let finalDate;
let intervalId;
let dataInput;

$(document).ready(function () {
    if (localStorage.dataInput != undefined) {
        finalDate = Number(localStorage.getItem("dataInput"));
        intervalId = setInterval(atualizacao, 1000);
    }
});

$(".btn-vai").click(function () {
    console.log("Btn Vai!");
    // aqui estamos pegando o valor que está no input
    const date = document.querySelector("input").value;
    // pegando o valor do input e deixando no valor de milisegundos
    finalDate = new Date(date).getTime();
    localStorage.setItem("dataInput", finalDate);
    
    
    intervalId = setInterval(atualizacao, 1000);

    

});

function atualizacao() {
    // pegando a data de hoje
    let now = new Date().getTime();
    // fazendo a conta para ver a diferneça dos milesegundos
    diferenca = finalDate - now;
    const days = Math.floor(diferenca / dia);
    const horas = Math.floor((diferenca % dia) / hora) + 3;
    const minutos = Math.floor((diferenca % hora) / minuto);
    const segundos = Math.floor((diferenca % minuto) / second);
    $(".emoji").empty();
    $(".resultado").empty();
    $(".resultado").append(`${days} dias | ${horas}h:${minutos}:${segundos}`);
}

$(".btn-resetar").click(function () {
    $(".emoji").empty();
    $(".resultado").empty();
    $(".emoji").append("😀");
    clearInterval(intervalId);
    $(".resultado").empty();
    localStorage.removeItem("dataInput");
});
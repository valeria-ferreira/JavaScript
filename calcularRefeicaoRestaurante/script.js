function calcular(){
    let valorQuilo = document.getElementById("valorQuilo");
    let pratoTara = document.getElementById("pratoTara");
    let pesoRefeicao = document.getElementById("pesoRefeicao");

    let telaPeso = document.getElementById("telaPeso");
    let telaFinal = document.getElementById("telaFinal");

    let pesoFinal = (pesoRefeicao.value) - (pratoTara.value); 
    let precoFinal = (pesoFinal) * (valorQuilo.value);
    
    telaPeso.innerHTML = pesoFinal;
    telaFinal.innerHTML = precoFinal.toFixed(2);
}

function limpar(){
    let valorQuilo = document.getElementById("valorQuilo");
    let pratoTara = document.getElementById("pratoTara");
    let pesoRefeicao = document.getElementById("pesoRefeicao");

    let telaPeso = document.getElementById("telaPeso");
    let telaFinal = document.getElementById("telaFinal");

    valorQuilo.value = ""; 
    pratoTara.value = ""; 
    pesoRefeicao.value = ""; 

    telaPeso.innerHTML = "";
    telaFinal.innerHTML = "";
}

function separar(){
    let valorDigitado = document.getElementById("valorDigitado").value;
    let valorSplit = valorDigitado.split(' ');
    let numeros = [];
    let palavras = [];
    
    valorSplit.forEach(function (item, index) {
      if(isNaN(item)){
      	palavras.push(item);
      } 
      else{
      	numeros.push(item);
      }
  	});
    
    document.getElementById("tela-numeros").value = numeros.join(", ");
    document.getElementById("tela-palavras").value = palavras.join(", ");
   
}
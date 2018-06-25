	var entrada;
    var inicial;
    var porcentagem;
     var meses;
     var jurosfinal;

function calculadora(){

    inicial = document.getElementById('capital_1').value;
    porcentagem = document.getElementById('juros_1').value;
    meses = document.getElementById('meses_1').value;
   
    entrada = inicial * Math.pow((1 + (porcentagem/100)), meses);
 	jurosfinal = entrada - inicial;
 	
    document.getElementById('montante_1').innerHTML = entrada;

    document.getElementById('jurosfinais_1').innerHTML = jurosfinal;

}
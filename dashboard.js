  
function carregaDash(){
var strUser = localStorage.getItem("dashcardUser");
if (!strUser){
    window.location = "index.html";
}

// usuario está conectado... preciso consultar o relatórico consolidado no back end
var strId = window.location.search;
console.log(strId);

var idAgente = strId.substr(4);
console.log("ID recuperado = "+idAgente);

fetch("http://localhost:8088/totaisconsolidados?id="+idAgente)
   .then(res => res.json())
   .then(lista => preencheDash(lista));
}

function preencheDash(lista){
console.log(lista);
var nomeAgente;
var volume;
var sucesso;
var falha;
var fraude;

for (i=0; i<lista.length; i++){
    var ag = lista[i];
    nomeAgente = ag.nomeAgente;
    volume = ag.volume;
   
    if (ag.status == 0){
        sucesso = ag.numeroOp;
    }
    else if (ag.status == 1) {
        falha = ag.numeroOp;
    } 
    else if (ag.status == 2){
        fraude = ag.numeroOp;
    }    
    
  
}

document.getElementById("nomeAgente").innerHTML = "<h3>"+nomeAgente+"</h3>";
document.getElementById("volumeAgente").innerHTML = "<h4>Volume Transacional: "+volume+"</h4>";
document.getElementById("tsucesso").innerHTML = "<h4>Trans. Sucesso: "+sucesso+"</h4>";
document.getElementById("tfalha").innerHTML = "<h4>Trans. Falha: "+falha+"</h4>";
document.getElementById("tfraude").innerHTML = "<h4>Trans. Fraude: "+fraude+"</h4>";

}
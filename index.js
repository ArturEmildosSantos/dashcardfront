function login(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtPassword = document.getElementById("txtPassword").value;
    console.log("Valores = " +txtLogin +" / " +txtPassword)


    var msgBody = {
        email    : txtLogin,
        racf     : txtLogin,
        password : txtPassword

    };

    var cabecalho = {
        method  : "POST",
        body    : JSON.stringify(msgBody),
        headers : {
            "content-type":"application/json"
        }
        
    };

    fetch("http://localhost:8088/login",cabecalho).then(res => tratastatus(res));

}

function tratastatus(res){
    if (res.status ==200){
        res.json().then(user => registrarUser(user));

    }
    else if (res.status == 401){
        document.getElementById("msgErro").innerHTML = "Password Errado"
    }
    else if (res.status == 404){
        document.getElementById("msgErro").innerHTML = "Usuario não Cadastrado"

    }
    else{
        document.getElementById("msgErro").innerHTML = "Erro Desconhecido";
    }
}


function registrarUser(user){
    localStorage.setItem("dashcardUser",JSON.stringify(user));
    window.location ="agentes.html"


}
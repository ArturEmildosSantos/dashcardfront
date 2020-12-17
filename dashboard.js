function carregaDash(){
    var strUser = localStorage.getItem("dashcardUser");
    if (!strUser){
        window.location = "index.html";
    }
}
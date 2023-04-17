function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if (usuario =="" && senha==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("ACESSO PERMITIDO")
        window.open('menu.html')
    }
}
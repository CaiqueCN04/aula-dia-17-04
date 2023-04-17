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

function calc(){
    let n1= Number(prompt("digite o primeiro valor"))
    let n2= Number (prompt("digite o segundo nuumero"))
    let op = Number(prompt(`DADOS INFORMADOS: ${n1} e ${n2}\n escolha uma opção:\n [1] soma \n [2]subtrair\n [3]multiplicar\n [4]dividir`))
    let msg= document.getElementById('msg')
    msg.innerHTML = `<h2>Processando o resultado</h2>`

    switch(op){
        case 1: msg.innerHTML +=`<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
        break;
        case 2:
            msg.innerHTML +=`<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
        break;
        case 3:
            msg.innerHTML +=`<p>${n1} * ${n2} = <strong>${n1*n2}</strong></p>`
        break;
        case 4:
            msg.innerHTML +=`<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
        break;
        case 5: 
        msg.innerHTML+=`<p>Opção invalida</p>`
        break;
    }
}
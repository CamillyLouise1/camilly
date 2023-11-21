function validaFormulario(){

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    console.log(senha)

    //Validação de campos vazios
    if(nome == '' || email == '' || senha == ''){
        alert("Por favor, preencha os campos vazios!")
    }
    
    //validação do campo do email
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    // Verifica tamanho da senha 
    if(senha.length > 8){
        alert("A senha excedeu os limites de cara caracteres")
        return
    }
    
     alert("O cadastro foi realizado com sucesso")
}

const perfilService = require("./services/perfil.service");


async function testarCadastro() {
    try {
        const resultado = await perfilService.cadastrarUsuario(
            "PAPA",
            "RONALDO@gmail.com",
            "AH SÓ APENAS NOME E EMAILLLL"
  
        );

        console.log("Cadastro realizado:", resultado);
    } catch (erro) {
        console.log("Erro: Todos os campos precisam ser preenchidos");
    }
    testeVerusuario()
}


async function testarDelete(id) {
    try {
        const resultado = await perfilService.deletarUsuario(
            id
        );
        testeVerusuario()

        console.log("Apagado com sucesso",resultado);
    } catch (erro) {
        console.log("Erro: Todos os campos precisam ser preenchidos",);
    }


    
}

async function testeAtualizar(descricao,id) {
    
    try {
        const resultado = await perfilService.atualizarUser(
            descricao,
            id
        );

        console.log("Atualizado com sucesso",resultado);
    } catch (erro) {
        console.log("Erro: Todos os campos precisam ser preenchidos",);
    }
    testeVerusuario()
}

async function testeVerusuario() {
    const resultado = await perfilService.VerUsuario()
    console.log(resultado)
    
}



// MENSAGENS DE ERRO APARECENDO ERRADA OU NÃO APARECENDO NO CADASTRAR 

//OK testarDelete(29)
//OK testeAtualizar('Deu certo',30)
//OK testarCadastro();

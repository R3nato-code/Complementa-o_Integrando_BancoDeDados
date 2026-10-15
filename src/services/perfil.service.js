const perfilRepositorio= require('../repositories/perfilRepository')



async function VerUsuario() {

    return await perfilRepositorio.VerUsuario()
    
}






async function cadastrarUsuario( nome, email, descricao) {

    if (!nome || !email){
        throw new error("Esses campos são obrigatórios")
    }
    
  return await perfilRepositorio.cadastrarUsuario(
    nome,
    email,
    descricao
  );

}

async function deletarUsuario(id) {

    if(!id || id===-1){
        throw new error("Obrigatório preencher qual usuário deseja excluir")
    }
    
        return await perfilRepositorio.deletarUsuario(
        id
        )
        

        return await perfilRepositorio.buscar
    
}


async function atualizarUser(descricao,id) {

    if(!descricao || !id){
        throw new error ('Erro: Todos os dados precisam ser preenchidos')
    }
    return await perfilRepositorio.atualizarUser(descricao,id)
    
}





module.exports={cadastrarUsuario, deletarUsuario,atualizarUser,VerUsuario}
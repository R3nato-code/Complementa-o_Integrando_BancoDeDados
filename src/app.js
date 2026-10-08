const conexao=require('./database/conexao');
const perfilRepositorio=require('./repositories/perfilRepository');


async function VerUsuario(){

const resultado= await perfilRepositorio.BuscarUsuario(); 

console.log(resultado)
}



async function AdicionarUsuario(nome,email,descricao){

  const resultado= await perfilRepositorio.cadastrarUsuario(nome,email,descricao);

    console.log(resultado);


    VerUsuario();
}

async function atualizarUsario(descricao,id){

 const resultado = await perfilRepositorio.atualizarUser(descricao,id)

 console.log(resultado)
 VerUsuario();
}

async function apagarUser (id){

const resultado = await perfilRepositorio.deletarUsuario(id)
console.log(resultado)


VerUsuario();
}



//apagarUser(12);
//atualizarUsario("Sou o Renato e deu muito certo", 9)
//AdicionarUsuario("Madalena","madalena@gmail.com","Sou a Madalena e estou aprendendo Banco de Dados");
VerUsuario();
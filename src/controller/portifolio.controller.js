const conexao=require('../database/conexao')




async function BuscarUsuario() {

    const [resultado] = await conexao.query("SELECT * FROM PERFIL");

    console.log(resultado);

    return resultado;
}

module.exports=BuscarUsuario;
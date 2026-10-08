const conexao=require('../database/conexao')


async function BuscarUsuario() {

    const [resultado] = await conexao.query("SELECT * FROM PERFIL");
    return resultado;
}


async function cadastrarUsuario(nome,email,descricao) {

    const sql=`
    INSERT INTO PERFIL (NOME,EMAIL, DESCRICAO) VALUES
    (?,?,?)
  `;

  const valores=[nome,email,descricao];

  const resultados=await conexao.query(sql,valores);
}

async function atualizarUser(descricao,id) {

  const sql=`
  UPDATE PERFIL 
  SET DESCRICAO=? 
  WHERE ID=?`;

    const valores=[descricao,id];

  const resultados=await conexao.query(sql,valores);
}

async function deletarUsuario(id) {


  const sql=`
  DELETE FROM PERFIL WHERE ID=?
  `;
  const valores=[id];

  const resultados=await conexao.query(sql,valores);
}














module.exports={BuscarUsuario, cadastrarUsuario, atualizarUser, deletarUsuario};
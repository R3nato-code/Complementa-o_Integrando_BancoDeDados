const conexao=require('../database/conexao')


async function VerUsuario() {

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
  return resultado;
  

  
}

async function atualizarUser(descricao,id) {

  const sql=`
  UPDATE PERFIL 
  SET DESCRICAO=? 
  WHERE ID=?`;

    const valores=[descricao,id];

  const resultados=await conexao.query(sql,valores);

  return resultados;
}

async function deletarUsuario(id) {


  const sql=`
  DELETE FROM PERFIL WHERE ID=?
  `;
  const valores=[id];

  const resultados=await conexao.query(sql,valores);

  return resultados;
}



//cadastrarUsuario('Kero','kero@gmail','eu sou kero')
//atualizarUser('EU MUDEI DE PERSONA',13)
//deletarUsuario(18)
//VerUsuario();

module.exports={cadastrarUsuario,atualizarUser,deletarUsuario,VerUsuario}




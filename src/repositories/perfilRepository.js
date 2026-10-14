const conexao=require('../database/conexao')


async function VerUsuario() {

    const [resultado] = await conexao.query("SELECT * FROM PERFIL");
    console.log(resultado)
}


async function cadastrarUsuario(nome,email,descricao) {

    const sql=`
    INSERT INTO PERFIL (NOME,EMAIL, DESCRICAO) VALUES
    (?,?,?)
  `;

  const valores=[nome,email,descricao];

  const resultados=await conexao.query(sql,valores);

  VerUsuario();

  
}

async function atualizarUser(descricao,id) {

  const sql=`
  UPDATE PERFIL 
  SET DESCRICAO=? 
  WHERE ID=?`;

    const valores=[descricao,id];

  const resultados=await conexao.query(sql,valores);

  VerUsuario();
}

async function deletarUsuario(id) {


  const sql=`
  DELETE FROM PERFIL WHERE ID=?
  `;
  const valores=[id];

  const resultados=await conexao.query(sql,valores);

  VerUsuario();
}



//cadastrarUsuario('Kero','kero@gmail','eu sou kero')
//atualizarUser('EU MUDEI DE PERSONA',13)
//deletarUsuario(13)
VerUsuario();











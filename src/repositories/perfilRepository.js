const conexao = require('../database/conexao');

async function VerUsuario() {
  const [resultado] = await conexao.query('SELECT * FROM PERFIL ORDER BY ID ASC');
  return resultado;
}

async function cadastrarUsuario(nome, email, descricao) {
  const sql = 'INSERT INTO PERFIL (NOME, EMAIL, DESCRICAO) VALUES (?, ?, ?)';
  const [resultado] = await conexao.query(sql, [nome, email, descricao]);
  return { id: resultado.insertId, affectedRows: resultado.affectedRows };
}

async function atualizarUser(descricao, id) {
  const sql = 'UPDATE PERFIL SET DESCRICAO = ? WHERE ID = ?';
  const [resultado] = await conexao.query(sql, [descricao, id]);
  return { affectedRows: resultado.affectedRows };
}

async function deletarUsuario(id) {
  const [resultado] = await conexao.query('DELETE FROM PERFIL WHERE ID = ?', [id]);
  return { affectedRows: resultado.affectedRows };
}

module.exports = { cadastrarUsuario, atualizarUser, deletarUsuario, VerUsuario };

const conexao = require('../database/conexao');

async function buscarCursos() {
  const [resultado] = await conexao.query(
    'SELECT c.ID, c.FK_PERFIL, c.NOME, c.HORAS FROM CURSO c ORDER BY c.ID ASC'
  );
  return resultado;
}

async function cadastrarCurso(fkPerfil, nome, horas) {
  const [resultado] = await conexao.query(
    'INSERT INTO CURSO (FK_PERFIL, NOME, HORAS) VALUES (?, ?, ?)',
    [fkPerfil, nome, horas]
  );
  return { id: resultado.insertId, affectedRows: resultado.affectedRows };
}

async function deletarCurso(id) {
  const [resultado] = await conexao.query('DELETE FROM CURSO WHERE ID = ?', [id]);
  return { affectedRows: resultado.affectedRows };
}

async function atualizarCurso(nome, horas, id) {
  const [resultado] = await conexao.query(
    'UPDATE CURSO SET NOME = ?, HORAS = ? WHERE ID = ?',
    [nome, horas, id]
  );
  return { affectedRows: resultado.affectedRows };
}

module.exports = { buscarCursos, Buscarcurso: buscarCursos, cadastrarCurso, deletarCurso, atualizarCurso };

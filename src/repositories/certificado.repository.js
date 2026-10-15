const conexao = require('../database/conexao');


async function VerCertificado() {
  const [resultado] = await conexao.query('SELECT * FROM PERFIL ORDER BY ID ASC');
  return resultado;
}


async function buscarCertificados() {
  const [resultado] = await conexao.query(
    'SELECT ID, FK_PERFIL, TITULO, ANO, IMAGEM FROM CERTIFICADOS ORDER BY ANO DESC, ID ASC'
  );
  return resultado;
}

async function cadastrarCertificado(fkPerfil, titulo, ano, imagem = null) {
  const [resultado] = await conexao.query(
    'INSERT INTO CERTIFICADOS (FK_PERFIL, TITULO, ANO, IMAGEM) VALUES (?, ?, ?, ?)',
    [fkPerfil, titulo, ano, imagem]
  );
  return { id: resultado.insertId, affectedRows: resultado.affectedRows };
}

async function deletarCertificado(id) {
  const [resultado] = await conexao.query('DELETE FROM CERTIFICADOS WHERE ID = ?', [id]);
  return { affectedRows: resultado.affectedRows };
}

async function atualizarCertificado(id, titulo, ano, imagem = null) {
  const [resultado] = await conexao.query(
    'UPDATE CERTIFICADOS SET TITULO = ?, ANO = ?, IMAGEM = ? WHERE ID = ?',
    [titulo, ano, imagem, id]
  );
  return { affectedRows: resultado.affectedRows };
}

deletarCertificado(4);





module.exports = {
  buscarCertificados,
  buscarCertificado: buscarCertificados,
  cadastrarCertificado,
  deletarCertificado,
  atualizarCertificado
};

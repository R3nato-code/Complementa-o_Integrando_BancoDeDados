const cursoRepository = require('../repositories/curso.repository');

async function listarCursos() {
  return cursoRepository.buscarCursos();
}

module.exports = { listarCursos };

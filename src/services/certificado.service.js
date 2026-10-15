const certificadoRepository = require('../repositories/certificado.repository');

async function listarCertificados() {
  return certificadoRepository.buscarCertificados();
}

module.exports = { listarCertificados };

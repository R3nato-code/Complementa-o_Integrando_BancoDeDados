const perfilRepository = require('../repositories/perfilRepository');

async function listarPerfis() {
  return perfilRepository.VerUsuario();
}

async function buscarPerfilPrincipal() {
  const perfis = await listarPerfis();
  return perfis[0] || null;
}

async function cadastrarUsuario(nome, email, descricao) {
  if (!nome || !email || !descricao) {
    throw new Error('Nome, e-mail e descrição são obrigatórios.');
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error('Informe um e-mail válido.');
  }
  return perfilRepository.cadastrarUsuario(nome.trim(), email.trim(), descricao.trim());
}

async function atualizarUser(descricao, id) {
  if (!descricao || !Number.isInteger(Number(id)) || Number(id) <= 0) {
    throw new Error('Informe uma descrição e um ID válido.');
  }
  return perfilRepository.atualizarUser(descricao.trim(), Number(id));
}

async function deletarUsuario(id) {
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    throw new Error('Informe um ID válido para excluir.');
  }
  return perfilRepository.deletarUsuario(Number(id));
}

module.exports = {
  listarPerfis,
  buscarPerfilPrincipal,
  VerUsuario: listarPerfis,
  cadastrarUsuario,
  atualizarUser,
  deletarUsuario
};

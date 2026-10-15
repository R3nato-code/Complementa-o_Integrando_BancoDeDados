const perfilService = require('../services/perfil.service');
const cursoService = require('../services/curso.service');
const certificadoService = require('../services/certificado.service');

async function mostrarPortfolio(req, res, next) {
  try {
    const [perfilBanco, cursosBanco, certificadosBanco] = await Promise.all([
      perfilService.buscarPerfilPrincipal(),
      cursoService.listarCursos(),
      certificadoService.listarCertificados()
    ]);

    if (!perfilBanco) {
      return res.status(404).send('Nenhum perfil foi encontrado no banco de dados.');
    }

    const perfil = {
      ...perfilBanco,
      nomeCompleto: perfilBanco.NOME || perfilBanco.nome || 'Perfil',
      objetivo: perfilBanco.DESCRICAO || perfilBanco.descricao || '',
      linkedin: 'Adicionar LinkedIn',
      localizacao: 'Ponta Grossa, PR',
      numero: '',
      email: perfilBanco.EMAIL || perfilBanco.email || ''
    };

    const estadoAtual = {
      curso: cursosBanco[0]?.NOME || cursosBanco[0]?.nome || 'Desenvolvimento de Sistemas',
      nivel: 'Estudante',
      foco: 'Programação'
    };

    const certificados = certificadosBanco.map(certificado => ({
      ...certificado,
      nome: certificado.TITULO || certificado.titulo || 'Certificado',
      plataforma: 'Certificação',
      conclusao: certificado.ANO || certificado.ano || '',
      imagem: certificado.IMAGEM || certificado.imagem || '',
      link: certificado.IMAGEM || certificado.imagem || '#'
    }));

    // A seção de projetos do template atual é independente das três entidades do banco.
    const projetos = [];

    return res.render('portifolio', { perfil, cursos: cursosBanco, certificados, projetos, estadoAtual });
  } catch (erro) {
    return next(erro);
  }
}

module.exports = { mostrarPortfolio };

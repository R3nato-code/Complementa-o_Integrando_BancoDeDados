CREATE DATABASE IF NOT EXISTS db_complementacao
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE db_complementacao;

CREATE TABLE IF NOT EXISTS PERFIL (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL UNIQUE,
    DESCRICAO TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS CURSO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FK_PERFIL INT NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    HORAS INT NOT NULL,
    CONSTRAINT FK_CURSO_PERFIL
      FOREIGN KEY (FK_PERFIL) REFERENCES PERFIL(ID)
);

CREATE TABLE IF NOT EXISTS CERTIFICADOS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FK_PERFIL INT NOT NULL,
    TITULO VARCHAR(150) NOT NULL,
    ANO INT NOT NULL,
    IMAGEM VARCHAR(255),
    CONSTRAINT FK_CERTIFICADOS_PERFIL
      FOREIGN KEY (FK_PERFIL) REFERENCES PERFIL(ID)
);

INSERT IGNORE INTO PERFIL (ID, NOME, EMAIL, DESCRICAO) VALUES
(1, 'Renato da Silva Hipólito Mascarenhas', 'mascarenhasr02@gmail.com',
 'Estou no 2° Ano do ensino médio, cursando desenvolvimento de sistemas, tenho interesse em aprender novas habilidades e melhorar minhas capacidades');

INSERT IGNORE INTO CURSO (ID, FK_PERFIL, NOME, HORAS) VALUES
(1, 1, 'Unidade_HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB', 8);

INSERT IGNORE INTO CERTIFICADOS (ID, FK_PERFIL, TITULO, ANO, IMAGEM) VALUES
(5, 1, 'Unidade_HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB', 2026, 'https://raw.githubusercontent.com/R3nato-code/R3nato-code.github.io/refs/heads/desenvolvimento/src/site/Certificado%201.jpg'),
(6, 1, 'GIT E GITHUB: COMPARTILHANDO E COLABORANDO EM PROJETOS', 2025, 'https://raw.githubusercontent.com/normalmant/Complementacao-IntegracaoBackEnd/refs/heads/main/src/site/Certificado%203.jpg'),
(7, 1, 'LINGUAGEM DE PROGRAMAÇÃO: CRIANDO PROJETOS ARTÍSTICOS COM JAVASCRIPT', 2024, 'https://raw.githubusercontent.com/normalmant/Complementacao-IntegracaoBackEnd/refs/heads/main/src/site/Certificado%204.jpg'),
(8, 1, 'GIT E GITHUB: REPOSITÓRIO, COMMIT E VERSÕES', 2026, 'https://raw.githubusercontent.com/normalmant/Complementacao-IntegracaoBackEnd/refs/heads/main/src/site/Certificado%205.jpg'),
(9, 1, 'LÓGICA DE PROGRAMAÇÃO: MERGULHE EM PROGRAMAÇÃO COM JAVASCRIPT', 2025, 'https://raw.githubusercontent.com/normalmant/Complementacao-IntegracaoBackEnd/refs/heads/main/src/site/Certificado%206.jpg'),
(10, 1, 'GIT E GITHUB: COMPARTILHANDO E COLABORANDO EM PROJETOS', 2025, 'https://raw.githubusercontent.com/normalmant/Complementacao-IntegracaoBackEnd/refs/heads/main/src/site/Certificado%203.jpg');

-- O perfil de ID 30 não foi incluído porque o e-mail original não estava disponível.
-- Acrescente-o quando tiver o e-mail correto para respeitar a restrição UNIQUE.
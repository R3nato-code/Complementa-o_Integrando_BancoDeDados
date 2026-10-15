# Portfólio — Integração Back-end com Banco de Dados

Aplicação Node.js com Express, EJS e MySQL, organizada em camadas: Router → Controller → Service → Repository → Banco de Dados.

## Banco utilizado
MySQL. O script de estrutura e dados iniciais está em `src/database/db.sql`.

## Instalação
1. Instale Node.js e MySQL.
2. No terminal, na raiz do projeto, execute:
   ```bash
   npm install
   ```
3. Crie o banco no MySQL Workbench e execute o script `src/database/db.sql` caso as tabelas ainda não existam.

## Configuração
Crie o arquivo local `.env` na raiz do projeto com as variáveis usadas pela conexão: `DB_HOST`, `DB_USER`, `DB_SENHA`, `DB_NAME` e `DB_PORT`. Preencha os valores da sua instalação local. Não compartilhe o conteúdo desse arquivo nem o envie ao GitHub; ele já está listado no `.gitignore`.

## Execução
```bash
npm start
```
Acesse http://localhost:3000.

## Estrutura
- `src/app.js`: configuração do Express e tratamento de erros.
- `src/routes/portifolio.routes.js`: rota GET /.
- `src/controller/portifolio.controller.js`: coordena os Services e renderiza a página.
- `src/services/`: validações e regras de negócio.
- `src/repositories/`: consultas SQL e acesso ao MySQL.
- `src/database/conexao.js`: pool de conexões.
- `src/database/db.sql`: tabelas, relacionamentos e dados iniciais.
- `src/views/portifolio.ejs`: página do portfólio.
- `docs/`: documentação e modelo entidade-relacionamento.

## Fluxo da arquitetura
1. **Router:** recebe a requisição HTTP e direciona para o Controller.
2. **Controller:** chama os Services necessários e decide qual resposta enviar.
3. **Service:** valida dados e aplica regras de negócio.
4. **Repository:** executa consultas SQL e retorna os resultados.
5. **Banco de dados:** armazena os dados e aplica chaves primárias/estrangeiras.

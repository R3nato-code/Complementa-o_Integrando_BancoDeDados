const conexao= require('../database/conexao')

async function buscarCertificado() {

 const [resultado]= await conexao.query('SELECT * FROM CERTIFICADOS')
 console.log(resultado)
}


async function cadastrarCertificado(FK_PERFIL, titulo,ano,imagem) {

    const sql= `
    INSERT INTO CERTIFICADOS(FK_PERFIL,TITULO,ANO,IMAGEM) VALUES
    (?,?,?,?)`

    const valores=[FK_PERFIL,titulo,ano,imagem]
    const [resultado]= await conexao.query(sql,valores)
    buscarCertificado();
    
}


async function deletarCertificado(ID) {

    const sql=`
    DELETE FROM CERTIFICADOS WHERE ID=?
    `
    const valores=[ID]
    const [resultado]= await conexao.query(sql,valores)

    buscarCertificado();
    
}

async function atualizarCertificado(id,titulo,ano,imagem) {

    const sql=`
    UPDATE CERTIFICADOS
    SET TITULO= ?,
    ANO=?,
    IMAGEM=?
    WHERE ID=?
    `
    const valores=[titulo,ano,imagem,id]
    const [resultados]= await conexao.query(sql,valores)

    buscarCertificado();
    
}

//atualizarCertificado(4,'TESTANDO ATUALIZAÇÃO',2000,'PGNZÃO ALTERADO')
//deletarCertificado(3)
//cadastrarCertificado(1,'TESTANDO CADASTRO DE CERTIFICADO',2022,'PNGZÃO')
buscarCertificado();
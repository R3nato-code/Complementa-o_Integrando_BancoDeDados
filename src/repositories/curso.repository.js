const conexao= require('../database/conexao')


async function Buscarcurso() {

    const [resultado] = await conexao.query("SELECT * FROM CURSO");
    console.log(resultado)

}

async function cadastrarCurso(fk,nome,horas) {

    const sql = ` INSERT INTO CURSO (FK_PERFIL,NOME, HORAS) VALUES
    (?,?,?)`;

    const valores= [fk,nome,horas]

    const [resultado]=await conexao.query(sql,valores)

    Buscarcurso();
    
}

async function deletarCurso(ID) {

    const sql= `DELETE FROM CURSO WHERE ID=?`;
    const valores=[ID]

    const resultado= await conexao.query(sql,valores)
    
    Buscarcurso();
}


async function atualizarCurso(nome,horas,id) {

    const sql=`
    UPDATE CURSO
    SET NOME=?,
        HORAS=?
    WHERE ID =?`;

    const valores=[nome,horas,id]
    
    const [resultado]= await conexao.query(sql,valores)

     Buscarcurso();
}




//Buscarcurso();
//cadastrarCurso(1,'HTML5 e CSS3', 60)
//deletarCurso(3)
//atualizarCurso('TESTANDO ALTERAÇÃO DE CURSO',1,3)
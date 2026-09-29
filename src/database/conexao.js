require('dotenv').config();
const mysql=require('mysql2');


console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_SENHA);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PORT);   

const conexao=mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_SENHA,
database: process.env.DB_NAME,
port: process.env.DB_PORT
});








//conexao.connect((erro)=>{
   // if(erro){
     //   console.error("Não conectou",erro);
       // return;
//    }
 //   console.log("Conectou com sucesso");


//})
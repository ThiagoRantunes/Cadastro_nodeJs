const rl = require("./input");
const conexao = require("./conexao");

conexao.connect((err) => {
    if(err){
        console.log("Erro ao conectar: ", err);
    }else{
        rl.question("Digite o nome aqui: ", (nome) => {
            conexao.query(`INSERT INTO usuarios (nome) VALUES ("${nome}")`, (err, rows) => {
                if(err){
                    console.log("Erro ao cadastrar: ", err);
                    return;
                }else{
                    console.log("Sucesso ao cadastrar: ", nome);
                }
            })
        })
    }
});
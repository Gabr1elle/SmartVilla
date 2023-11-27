const { NOMEM } = require("dns");

//variáveis a serem recebidas preenchidas no Json
//Login (Flag 1)
cnpjJson = 81232253000192
senhaJson = 'Bs3alFwf'
//Folha de Pagamento (Flag 2)
cdFuncJson = 99900

//Variaveis usadas no codigo
flag = 1
//Login
retorno = 0
encontrado = 0
erro = 0
//Folha de Pagamento
descontos = 0.075
descontoVT = 0.06
salarioFinal = 0
salarioDescontado = 0
lido = 0 
totalDescontos = 0

if(flag ==1){
    const readline = require("readline");
    const fs = require("fs");

    const line = readline.createInterface({
        input: fs.createReadStream("Tb_Login.csv"),
    });

    line.on("line", (data) => {
    let csv = data.split(";");

    console.log(`CNPJ: ${csv[0]} - Senha: ${csv[1]}`);
        CNPJ = csv[0]
        Senha = csv[1]
        if(CNPJ == cnpjJson){
            encontrado = 1
            if (Senha == senhaJson){
                retorno = 1 //retorno ok, vai para prox tela
                console.log("Login Correto")
            }else{ 
                retorno = 2 // senha incorreta
                console.log("Senha incorreta")
            }
        }else{
            //retorno = 3
            erro = 1} // usuario nao cadastrado ou incorreto

    line.on("close", () => {
    if(encontrado == 0){
        retorno = 0
        console.log("Nenhum usuario encontrado")
    }
    });
    
    //console.log(encontrado)
    });
}
if(flag == 2){
    const readline = require("readline");
    const fs = require("fs");

    const line = readline.createInterface({
    input: fs.createReadStream("Tb_Pagamento.csv"),
    });

    line.on("line", (data) => {
    let csv = data.split(";");

    console.log(`CD_FUNC: ${csv[0]} - NOME: ${csv[1]} - SETOR: ${csv[2]} - SALARIO: ${csv[3]} - ADMISSAO: ${csv[4]} - HE: ${csv[5]} - DSR_HE: ${csv[6]} - COMISSAO: ${csv[7]} - DSR-COMIS: ${csv[8]} - INSS: ${csv[9]} - IRRF: ${csv[10]} - VT: ${csv[11]}`);
        cdFunc = csv[0]
        nome = csv[1]
        setor = csv[2]
        salario = csv[3]
        salarioNum = Number(salario)
        admissao = csv[4]
        he = csv[5]
        dsrHe = csv[6]
        comissao = csv[7]
        dsrComiss = csv[8]
        inss = csv[9]
        irrf = csv[10]
        vt = csv[11]
        salario1 = 0
        
        if(cdFunc == cdFuncJson){
            
            lido = 1

            console.log(salarioNum)

            let inssFinal = salarioNum * descontos
            salarioDescontado = salarioNum - inssFinal;
            console.log(inssFinal)

            let irrfFinal = salarioDescontado * descontos;
            salarioDescontado = salarioDescontado - irrfFinal;
            console.log(irrfFinal)
 
            if(vt != 0){
                let valeTransporteFinal = salarioDescontado * descontoVT
                salarioDescontado = salarioDescontado - valeTransporteFinal
                console.log(valeTransporteFinal)
            }

            let salarioFinal = salarioDescontado
            console.log(salarioFinal)
            totalDescontos = salarioNum - salarioFinal
        };
    });
    line.on("close", () => {
    if(lido === 0){
        console.log(lido)
        console.log("Nenhum funcionario encontrado")
    }
    });
};
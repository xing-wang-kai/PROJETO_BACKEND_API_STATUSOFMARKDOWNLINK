import pegarArquivo from './index.js'
import chalk from 'chalk';
import validarArray from './http-validacoes.js';

const alert = chalk.bgYellow.black.bold;

const caminho = process.argv;

async function processaTexto(caminhoArquivo)
{
    
    const resultado = await pegarArquivo(caminhoArquivo[2]);
    if(caminhoArquivo[3]=== 'validar')
    {
        console.log(alert(`\n Link's validados: -> \n`), validarArray(...resultado))
    }
    else{
        console.log(alert(`\n lista de Links:  --> \n`), resultado)
    }
    
}
console.log(processaTexto(caminho))
import chalk from 'chalk';

import pegarArquivo from './index.js'
import validarArray from './http-validacoes.js';

const alert = chalk.bgYellow.black.bold;

const caminho = process.argv;

//Esta função pega o Caminho pelo comandos digitado, o comando com o caminho está no SCRIPT's npm run cli somente caminho até array 2 ou npm run validar com caminho até o array 3;
async function processaTexto(caminhoArquivo)
{
    const resultado = await pegarArquivo(caminhoArquivo[2]);
    if(caminhoArquivo[3] === 'validar')
    {
        console.log(alert(`                          \n Link's validados: ->     \n                          \n`), await validarArray(...resultado))
    }
    else{
        console.log(alert(`                          \n Link's não validados: -> \n                          \n`), ...resultado)
    }
}
console.log(await processaTexto(caminho))
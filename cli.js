import pegarArquivo from './index.js'
import chalk from 'chalk';

const alert = chalk.bgYellow.black.bold;

const caminho = process.argv;

async function processaTexto(caminhoArquivo)
{
    
    const resultado = await pegarArquivo(caminhoArquivo[2]);
    console.log(alert(`\n --> lista de Links: \n\n\n`), resultado)
}
console.log(processaTexto(caminho))
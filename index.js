import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const sucesso = chalk.bold.green;
const error = chalk.bold.hex("#950101");
const alert = chalk.underline.yellow;

function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while((temp=regex.exec(texto)) !== null ){
        arrayResultados.push({[temp[1]]: temp[2]})
    }
    return arrayResultados == 0 ? error('ATENÇÃO: não existem links no arquivo direcionado'): arrayResultados;

}

function tratarError(erro){
    throw new Error(error(erro.message), alert("Ocorreu um Error Verifique as informações!"));
}
    
async function pegarArquivo(caminhoArquivo){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const caminhoAbsoluto = path.join(__dirname, caminhoArquivo);

    const enconding = 'utf-8';
    try{
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, (err, arquivo)=> {return arquivo});

         let textos = await Promise.all(arquivos.map( async (arquivo) => {
                const caminhoNovo = `${caminhoAbsoluto}/${arquivo}`;
                const texto = await fs.promises.readFile(caminhoNovo, enconding)
                return extrairLinks(texto)
        }))
        return textos.map( texto => {return texto});
    }catch(err){
        tratarError(err)
    }
}
export default pegarArquivo;
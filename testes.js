import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import chalk from 'chalk'

const sucesso = chalk.bgGreen.bold.black;
const retorno = chalk.bgCyanBright.bold.black;

function tratarError(err)
{
    throw new Error(err.code)
}
async function lerArquivo(caminho)
{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const caminhoAbsoluto = path.join(__dirname, caminho);
    console.log(sucesso(`  Caminho Absoluto: `), caminhoAbsoluto)

    const enconding = 'utf-8';
    try{
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, (err, arquivos) => { return arquivos });
        console.log(retorno(`  Arquivos Retornados são: `), arquivos)
        const textos = await Promise.all(arquivos.map( async (item) => {
            const caminhoNovo = `${caminhoAbsoluto}/${item}`;
            console.log(retorno("  links : "), caminhoNovo);
            const texto = await fs.promises.readFile(caminhoNovo, enconding);
            return texto;
        }))
        console.log(retorno("  Retornos dos textos: "), textos)
    }
    catch(err)
    {
        console.log(tratarError(err));
    }
    finally
    {
        console.log(sucesso(`\n       \n  FIM  \n       \n`))
    }
}

const caminho = process.env;

async function pegarLinks(caminho)
{
    const resultados = await lerArquivo(caminho[2]);
    if(caminho[3]=== 'validar')
    {
        console.log(retorno("  LINKS VALIDADOS : "), resultados )
    }
    else{
        console.log(retorno('   TEXTO : '), resultados)
    }
}

pegarLinks(caminho);
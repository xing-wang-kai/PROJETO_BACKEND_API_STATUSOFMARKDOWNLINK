
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const caminhoAbsoluto = path.join(__dirname, './files');
console.log("ESTE É O CAMINHO ABSOLUTO-->", caminhoAbsoluto)

async function lerArquivos(caminho){
    try{
        let arquivos = await fs.promises.readdir(caminho, (err, texto) => {return texto})
        console.log(chalk.bgYellow.black("este é o arquivo",  typeof arquivos))
        let textos = await Promise.all(arquivos.map( async (arquivo) => {
            const caminhoNovo = `${caminho}/${arquivo}`;
            console.log(chalk.blue("o caminho é " ), caminhoNovo);
            const texto = await fs.promises.readFile(caminhoNovo, 'utf-8')
            return texto
        }))
        console.log(textos)
        
        
        
    }
    catch(err){
        console.log(err.code)
    }
   
}

lerArquivos(caminhoAbsoluto);


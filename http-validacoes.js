import fetch from 'node-fetch';

function tratarErros(err){
    throw new Error(err.message);
}

//Esta função pega os links gerados na função ExtrairLinks e então verifica se os links estão válidos ou não.
async function extrairStatus(links)
{
    try{
        const arrayStatus = await Promise.all(links.map( async (link) => {
            const res = await fetch(link);
            return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus;
    }catch(err){
        console.log(tratarErros(err));
    }
    
}

//Esta função ira extrair todos links que estão dentro do arrayLinks vindos do texto md.
function extrairLinks(arrayLinks)
{
    return arrayLinks.map( link => Object.values(link).join());
}

//Esta função recebe o array com objetos (tag, urls) e então extrai os links do objeto, verificar os status de requisição de cada link com a função extrairStatus, e então retorna novamente um novo array com objetos ( tag, link, status);
async function validarArray(array)
{
    const links = extrairLinks(array);
    const status = await extrairStatus(links)
    const retornos = array.map((objeto, index) => ({
        ...objeto, status: status[index]
    }))
    return retornos;
}


export default validarArray;


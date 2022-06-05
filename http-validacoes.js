
function extrairLinks(arrayLink)
{
    return arrayLink.map( link => Object.values(link).join() )
}
function validarArray(arrayLinks)
{
    return extrairLinks(arrayLinks);
}

export default validarArray;
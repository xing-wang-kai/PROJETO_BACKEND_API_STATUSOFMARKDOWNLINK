# Leitor de Links Markdown

## :thought_balloon: SOBRE

API que verifica todos links em um arquivo markdown e retorna se o link está ativo com retorno 200 ou se o mesmo está fora do ar com retorno 404. Está API é util para blogs que usam o MarkDown para suas postagens, desta maneira com os retornos corretos os editores e aqueles que serão os autores do conteúdos conseguem garantir que os links estão funcionais para todos os usuários.

## :speech_balloon: COMO FUNCIONA A API.

O usuário deverá inserir dentro da pasta files os arquivos em formato MarkDown.
Ao executar o comando "npm run cli" o sistema vai retorna um array com objetos como chave o nome usando no markdown como tag do link e o link. Esse processo de extração do array ultiliza Expresões regulares para retornar os valores. Essas Espressões regulares pega o padrão do REGEX.

O usuário também poderá ter o retorno de informações como somente um array de link usando o processo VALIDAR. Nesse caso o mesmo deverá digitar "npm run validar", o sistema irá retornar um array com todos links e códigos de retornos.

Retornos dos Links No caso validar: 

<img align="center" alt="retornos API" src="https://github.com/xing-wang-kai/PROJETO_BACKEND_API_STATUSOFMARKDOWNLINK/blob/master/SRC/retornos.png?raw=true">

No exemplo acima todos links tiveram o status retornado pela fetch API como 200 - ok; 
Caso algum dos links não estivesse funcionado o retorno seria 404 - not found;


### SOBRE O CHALK

A palavra Chalk do inglês significa literalmente giz de cerra, está biblioteca tem como finalizade facilitar a coloração do conteúdo que será exibido no terminal de comando. desta maneira ao retorna as informações elas serão destacadas no terminal facilitando ainda mais o entendimento dos retornos pelo nosso usuário.

Estas técnicas de retorno são aplicados conformes conceitos modernos de IHC (interção homem computador.)

### TESTS COM JEST

Teste foram realizados usando o JEST para garantir a integridade desta API.

<img align="center" alt="retornos API" src="https://github.com/xing-wang-kai/PROJETO_BACKEND_API_STATUSOFMARKDOWNLINK/blob/master/SRC/testes.png?raw=true">




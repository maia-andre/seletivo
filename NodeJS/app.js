// Definição de endereço / URL
const http = require('http'); 
const url = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
    
    // Pegar a pergunta na URL
    const params = queryString.parse(url.parse(req.url, true).search);

    //Verificar a pergunta e escolher a resposta
    let resposta;
    if(params.cargo == 'professor-geografia'){
        resposta = 'Sua aplicação para Prof de Geografia foi efetuada com sucesso!';
    } 
    else if(params.cargo == 'professor-matematica'){
        resposta = 'Sua aplicação para Prof de Matematica foi efetuada com sucesso!';
    }
    else {
        resposta = 'Sem vagas para a opção selecionada :(';
    }

    // retornar a resposta escolhida
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});

// execução
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
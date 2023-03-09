// https://on.letsbot.com.br/area/produto/item/652322
//  - - - - - Variaveis e requisitos - - - - - 
var bodyParser = require('body-parser')
const express = require('express') // importando express pro codigo
const app = express() // importando as fuções do express

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//  - - - - - serviços e rotas - - - - - 

app.get('/', function(req, res){ // ao acessar a rota '/', o retorno será o que está no function.
  res.send("Hello Bot!")
})


app.get('/pegar_nome/:nome', function(req, res){

  nome = req.params.nome // pega o valor da requisição e coloca numa variavel
  console.log(nome)
  res.send("Pegar nome " + nome)
})

app.get('/pegar_dados', function(req, res){
  console.log(req)
  nome = req.query.nome
  idade  = req.query.idade
  console.log("Usuário: " + nome +', '+ idade)
  res.send("Usuário: " + nome +', '+ idade)
  // http://127.0.0.1:3000/pegar_dados?nome=kassio&idade=34
})

app.post('/deposito', function(req, res){ // http://127.0.0.1:3000/deposito
  console.log(req.body)
  valor = req.body.valor
  console.log("Valor: "+valor)
  res.send("Teste de post! Valor: " + valor)
})



// - - - - - Rodar o aplicativo - - - - - 
app.listen(3000)
console.log("Servidor rodando")
// npm run dev - para rodar o app



/**
 * https://www.npmjs.com/package/body-parser
 * 
 */
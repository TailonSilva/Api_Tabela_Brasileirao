const config = require('./config');
const cors = require('cors')

const express = require('express');
const porta = config.porta

const app = express();

app.use(cors())
app.use(express.json());

const Times = require("./class/class_times");
const db_times = new Times();

//FUNÇÃO TRAZENDO TODOS OS TIMES CADASTRADOS NA TABELA 
app.get("/times", async (req, res) => {
  const resultado = await db_times.listaTimes();
  res.json(resultado)
})

//FUNÇÃO TRAZENDO A CLASSIFICAÇÃO DO CAMPEONATO NA ORDEM DO 1 AO 20 COM AS INFORMAÇÕES BASICA DE TABELA
app.get("/classificacao", async (req, res) => {
  const resultado = await db_times.classificação();
  res.json(resultado)
})

//INICIALIZAÇÃO DO SERVIDOR
app.listen(porta, () => {
  console.log('Rodando Certinho!!')
})


















/* 

//FUNÇÃO ATUALIANDO CLIENTE DO BANCO DE DADOS *FUNCIONANDO*
app.patch("/clientes/:id", (req, res) => {
  const id = Number(req.params.id);
  const infoCliente = req.body;
  db.alteraCliente(id, infoCliente);
  res.sendStatus(200);
})

//FUNÇÃO INSERINDO CLIENTE DO BANCO DE DADOS *FUNCIONANDO*
app.post("/clientes", async (req, res) => {
  const novoCliente = req.body;
  await db.inserirCliente(novoCliente);
  res.sendStatus(201);
})

//FUNÇÃO TRAZENDO TODOS OS CLIENTES DO BANCO DE DADOS *FUNCIONANDO*
app.get("/clientes", async (req, res) => {
  const resultado = await db.listaClientes();
  res.json(resultado)
})

//FUNÇÃO TRAZENDO CLIENTE FILTRADO PELO ID DO BANCO DE DADOS *FUNCIONANDO*
app.get("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id)
  const resultado = await db.listaCliente(id)
  res.json(resultado)
})

//FUNÇÃO DELETANDO CLIENTE PELO ID DO BANCO DE DADOS *FUNCIONANDO*
app.delete("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  await db.deletaCliente(id)
  res.sendStatus(204)
})

//RETONO DA ROTA RAIZ
app.get("/", (req, res) => {
  res.json({mensagem:"Bem Vindo ao nossa API"})
})

*/
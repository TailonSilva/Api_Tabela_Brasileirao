const config = require('../config')

//CARREGADO PACOTE MYSQL PROMISSES
const mysql = require('mysql2/promise')

//CRIANDO A CONEXÃO COM O BANCO DE DADOS MYSQL
const conexao = mysql.createPool(config.connection_string)

//CRIANDO A CLASSE QUE VAI CONFIGURAR O CRUD DOS CLIENTES
module.exports = class Times {
  constructor(id, nome, uf) {
    this.id = id
    this.nome = nome
    this.uf = uf
  }

  async listaTimes() {
    const consulta = await conexao.query("SELECT * FROM time;");
    return consulta[0]
  }

  async listaPontos() {
    const consulta = await conexao.query("SELECT time.nome, classificacao.pontos FROM time join classificacao on classificacao.id_time = time.id_time;");
    return consulta[0]
  }

  async classificação() {
    const consulta = await conexao.query("SELECT time.nome, classificacao.pontos, classificacao.vitorias, classificacao.empates, classificacao.derrotas, classificacao.gols_marcados, classificacao.gols_sofridos FROM classificacao JOIN time on classificacao.id_time = time.id_time ORDER BY pontos DESC;");
    return consulta[0]
  }

}
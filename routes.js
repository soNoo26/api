
import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

app.get('/', async (req, res) => {
    try {
      await sql.connect(config);
      const result = await sql.query('select * from Chamados');
      res.send(result.recordset);
    } 
    catch (error) {
      console.log(error);
      res.status(501).send('Erro ao buscar chamados.');
    }
  });
  

  app.get('/chamado/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await sql.query`select * from Chamados WHERE id = ${id}`;
      if (result.recordset.length === 0) {
        return res.status(404).send('Chamado não encontrado.');
      }
      return res.status(200).json(recordset)
    } 
    catch (error) {
      console.log(error);
      res.status(501).send('Erro ao buscar chamado.');
    }
  });
  
  app.post('/chamado/novo', async (req, res) => {
    try {
      const { dataChamado, nomeCliente, descricao } = req.body;
      await sql.query`INSERT INTO Chamados VALUES (${dataChamado}, ${nomeCliente}, ${descricao})`;
      res.status(201).json('Chamado cadastrado com sucesso.');
    } 
    catch (error) {
      console.log(error);
      res.status(501).json('Erro ao cadastrar chamado...');
    }
  });
export default routes
const express = require('express')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileCOntroler')
const sessionController = require('./controllers/sessionController')

const routes = express.Router()

/*Rota para verificar sessão de login*/
routes.post('/sessions', sessionController.create) 

/*Pegar todos as tabelas de ongs*/
routes.get('/ongs', ongController.index)

/**('/users') isso é exemplo de um recurso / rota */
routes.post('/ongs', ongController.create)

/*Para pegar um incidente especifico*/
routes.get('/profile', profileController.index) 

/**/
routes.get('/incidents', incidentController.index) 
routes.post('/incidents', incidentController.create) 
routes.delete('/incidents/:id', incidentController.delete)


module.exports = routes



const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const proyecto = require('./routes/proyecto')
const cliente = require('./routes/cliente')
const etapas = require('./routes/etapas')
const universidad = require('./routes/universidad')


// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/proyectos', proyecto)
app.use('/api/clientes', cliente)
app.use('/api/etapa', etapas)
app.use('/api/universidades', universidad)

module.exports = app
const { Router } = require('express')
const {createCliente, getCliente, eliminar_cliente, editar_cliente} =
 require('../controllers/cliente')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getCliente)

//Editar
router.put("/:id", editar_cliente);

// Eliminar
router.delete("/:id", eliminar_cliente);

module.exports = router;
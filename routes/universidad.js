const { Router } = require('express')
const {createUniversidad, getUniversidad, eliminar_universidad, editar_universidad} =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidad)

//Editar
router.put("/:id", editar_universidad);

// Eliminar
router.delete("/:id", eliminar_universidad);

module.exports = router;
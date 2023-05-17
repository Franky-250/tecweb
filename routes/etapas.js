const { Router } = require('express')
const {createEtapas, getEtapas, eliminar_etapas, editar_etapas} =
 require('../controllers/etapas')

const router = Router()

// crear
router.post('/', createEtapas)

// consultar todos
router.get('/', getEtapas)

//Editar
router.put("/:id", editar_etapas);

// Eliminar
router.delete("/:id", eliminar_etapas);

module.exports = router;
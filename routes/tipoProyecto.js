const { Router } = require('express')
const {createTipoProyecto, getTipoProyecto, eliminar_tipoProyecto, editar_tipoProyecto} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

//Editar
router.put("/:id", editar_tipoProyecto);

// Eliminar
router.delete("/:id", eliminar_tipoProyecto);

module.exports = router;
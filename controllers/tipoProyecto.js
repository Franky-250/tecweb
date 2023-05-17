const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoProyectoDB = await TipoProyecto.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(tipoProyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar
const getTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const { tipoProyecto } = req.query
            const tipoProyectoDB = await TipoProyecto.find({tipoProyecto})//select * from tipoEquipo where estado=?
            return res.json(tipoProyectoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//Editar
const editar_tipoProyecto = (req = request, res = response) => {
    const {id} = req.params
    const tipoProyecto = req.body
    const nuevo = {
        nombre: tipoProyecto.nombre
    }
    TipoProyecto.findByIdAndUpdate(id, nuevo, {new:true}).then(result => {res.json(result)}) 
  }
  
  //Eliminar
  const eliminar_tipoProyecto =(req = request, res = response) => {
    const {id} = req.params
    TipoProyecto.findByIdAndDelete(id).then(result => {res.json(result)})
  
  }


module.exports = { 
    createTipoProyecto, 
   getTipoProyecto, eliminar_tipoProyecto, editar_tipoProyecto
}
const Etapas = require('../models/etapas')
const { request, response} = require('express')

// crear
const createEtapas = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapasDB = await Etapas.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(etapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapas = new Etapas(data)
        console.log(etapas)
        await etapas.save()
        return res.status(201).json(etapas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar
const getEtapas = async (req = request, 
    res = response) => {
        try{
            const { etapas } = req.query
            const etapasDB = await Etapas.find({etapas})//select * from tipoEquipo where estado=?
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//Editar
const editar_etapas = (req = request, res = response) => {
    const {id} = req.params
    const etapas = req.body
    const nuevo = {
        nombre: etapas.nombre
    }
    Etapas.findByIdAndUpdate(id, nuevo, {new:true}).then(result => {res.json(result)}) 
  }
  
  //Eliminar
  const eliminar_etapas =(req = request, res = response) => {
    const {id} = req.params
    Etapas.findByIdAndDelete(id).then(result => {res.json(result)})
  
  }


module.exports = { 
    createEtapas, 
   getEtapas, eliminar_etapas, editar_etapas
}
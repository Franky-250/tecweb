const Universidad = require("../models/universidad");
const { request, response } = require("express");

//Crear
const createUniversidad = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const universidadDB = await Universidad.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (universidadDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    
    const data = {
      nombre,
      direccion,
      telefono,
    

    };
    const universidad = new Universidad(data);
    console.log(universidad);
    await universidad.save();
    return res.status(201).json(universidad);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//Listar
const getUniversidad = async (req = request, res = response) => {
  try {
    const { estado } = req.query;
    const universidadDB = await Universidad.find({ estado }); //select * from estados where estado=?
    return res.json(universidadDB);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//Editar
const editar_universidad = (req = request, res = response) => {
  const { id } = req.params;
  const universidad = req.body;
  const nuevo = {
    nombre: universidad.nombre,
    
    telefono: universidad.telefono,
  };
  Universidad.findByIdAndUpdate(id, nuevo, { new: true }).then((result) => {
    res.json(result);
  });
};

//Eliminar
const eliminar_universidad = (req = request, res = response) => {
  const { id } = req.params;
  Universidad.findByIdAndDelete(id).then((result) => {
    res.json(result);
  });
};

module.exports = { createUniversidad, getUniversidad, editar_universidad, eliminar_universidad };

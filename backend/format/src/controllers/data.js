const model = require("../models/data");

const getAll = async (req, res) => {
  try {
    const data = await model.getAll(req.body);
    return res.status(200).json({
      message: "Listado de datos de los campos",
      data: data,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ message: error, err: true });
  }
};

const create = async (req, res) => {
  try {
    const data = await model.create(req.body);
    return res.status(200).json({
      message: "Se creo exitosamente el dato del campo",
      data: data,
      err: false,
    });
  } catch (error) {
    return res.status(400).json({ message: error, err: true });
  }
};

module.exports = { getAll, create };

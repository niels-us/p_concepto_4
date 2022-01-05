const model = require("../models/fields");

const getAll = async (req, res) => {
  try {
    const field = await model.getAll(req.body);
    return res
      .status(200)
      .json({
        message: "Lista de los campos",
        data: field,
        err: false,
      });
  } catch (error) {
    return res
    .status(400)
    .json({
      message: error, 
      data: null,
      err: true
    });
  }
};

const create = async (req, res) => {
  try {
    const field = await model.create(req.body);
    return res
      .status(200)
      .json({
        message: "Campo creado exitosamente",
        data: field,
        err: false,
      });
  } catch (error) {
    return res
    .status(400)
    .json({
      message: error,
      data: null,
      err: true
    });
  }
};

module.exports = { getAll, create };

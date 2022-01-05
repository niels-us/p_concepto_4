var mongoose = require("mongoose");
const model = require("../models/comment");

const getAll = async (req, res) => {
  try {
    const comentary = await model.getAll(req.body);
    return res.status(200).json({ message: "List comment", err: false, data: comentary });
  } catch (error) {
    return res.status(400).json({ message: "No se pudo listar los comentarios", err: true, data: null, });
  }
};

const create = (req, res) => {
  try {
    req.body.data.forEach(async (body, i) => {
      req.body.data[i].formatId = mongoose.Types.ObjectId(req.body.data[i].formatId);
      req.body.data[i].createUser = mongoose.Types.ObjectId(req.body.data[i].createUser);
      await model.create(req.body.data[i]);
    });
    return res.status(200).json({ message: "El comentario se registro correctamente", err: false, data: null });
  } catch (error) {
    return res.status(400).json({ message: "No se pudo registrar los comentarios correctamente", err: true, data: null, });
  }
};

const deleteComentary = async (req, res) => {
  try {
    await model.deleteComentary(req.params.ID);
    return res.status(200).json({ message: "Se eliminó correctamente el comentario", err: false, data: null });
  } catch (error) {
    return res.status(400).json({ message: "No se eliminó el comentario correctamente", err: true, data: null });
  }
};

const createAndDelete = async (req, res) => {
  try {
    const get = await model.getAll({ transmitter_area: req.body.data[0].transmitter_area });
    const length_body = req.body.data.length;
    const total = get.length + length_body;
    if (total > 10) {
      const desc = await model.getAsc(req.body.data[0].transmitter_area, total - 10)
      desc.forEach(async (comentary) => {
        await model.deleteComentary(comentary._id)
      })
    }

    req.body.data.forEach(async (body, i) => {
      req.body.data[i].id_format = mongoose.Types.ObjectId(req.body.data[i].id_format);
      req.body.data[i].user_created = mongoose.Types.ObjectId(req.body.data[i].user_created);
      await model.create(req.body.data[i]);
    });

    return res.status(200).json({ message: "El comentario se registro correctamente", err: false, data: null });
  } catch (error) {
    return res.status(400).json({
      message: "No se pudo registrar los comentarios correctamente", err: true, data: null
    });
  }
};

module.exports = { getAll, create, deleteComentary, createAndDelete };

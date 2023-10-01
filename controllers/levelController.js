const { Level: levelModel } = require("../models/Level");

const levelController = {

  create: async(req, res) => {
    try {
      
      const level = {
        level: req.body.level, 
        points: req.body.points
      }

      const response = await levelModel.create(level);

      res.status(201).json({ response, msg:"Nível criado com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const level = await levelModel.find();

      res.json(level)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const level = await levelModel.findById(id);

      if(!level) {
        res.status(404).json({msg: "Tema não encontrado!"})
        return;
      }

      res.json(level);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const level = await levelModel.findById(id);

      if(!level) {
        res.status(404).json({msg: "Nível não encontrado!"})
        return;
      }

      const deletedlevel = await levelModel.findByIdAndDelete(id)

      res.status(200).json({deletedlevel, msg: "Nível excluído com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const level = {
      level: req.body.level, 
      points: req.body.points,
    }

    
    const updatedlevel = await levelModel.findByIdAndUpdate(id, level);

    if(!updatedlevel) {
      res.status(404).json({msg: "Nível não encontrado!"})
      return;
    }

    res.status(200).json({ level, msg:"Nível atualizado com sucesso!"})

  }

}

module.exports = levelController;
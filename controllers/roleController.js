const { Role: RoleModel } = require("../models/Role");

const RoleController = {

  create: async(req, res) => {
    try {
      
      const role = {
        role: req.body.role, 
      }

      
      const response = await RoleModel.create(role);

      res.status(201).json({ response, msg:"Função criada com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const roles = await RoleModel.find();

      res.json(roles)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const role = await RoleModel.findById(id);

      if(!role) {
        res.status(404).json({msg: "Função não encontrada!"})
        return;
      }

      res.json(role);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const role = await RoleModel.findById(id);

      if(!role) {
        res.status(404).json({msg: "Tema não encontrado!"})
        return;
      }

      const deletedRole = await RoleModel.findByIdAndDelete(id)

      res.status(200).json({deletedRole, msg: "Função excluída com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = RoleController;
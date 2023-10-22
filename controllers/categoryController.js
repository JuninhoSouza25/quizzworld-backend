const { Category: CategoryModel } = require("../models/Category");

const categoryController = {
  create: async(req, res) => {
    try {
      
      const category = {
        category: req.body.category, 
        description: req.body.description,
        image: req.body.image
      }

      const response = await CategoryModel.create(category);

      res.status(201).json({ response, msg:"Categoria criada com sucesso!"})

    } catch (error) {
      console.log("Erro ao criar categoria: ", error)
    }
  },
  getAll: async (req, res) => {

    try {

      const categories = await CategoryModel.find();

      res.json(categories)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const category = await CategoryModel.findById(id);

      if(!category) {
        res.status(404).json({msg: "Categoria não encontrada!"})
        return;
      }

      res.json(category);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const category = await CategoryModel.findById(id);

      if(!category) {
        res.status(404).json({msg: "Categoria não encontrada!"})
        return;
      }

      const deletedTheme = await CategoryModel.findByIdAndDelete(id)

      res.status(200).json({deletedTheme, msg: "Categoria excluída com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const category = {
      category: req.body.category, 
      description: req.body.description,
      image: req.body.image,
    }

    
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id, category);

    if(!updatedCategory) {
      res.status(404).json({msg: "Categoria não encontrada!"})
      return;
    }

    res.status(200).json({ category, msg:"Categoria atualizada com sucesso!"})

  }

}

module.exports = categoryController;
const { Theme: ThemeModel } = require("../models/Theme");

const themeController = {

  create: async(req, res) => {
    try {
      
      const theme = {
        theme: req.body.theme, 
        description: req.body.description,
        image: req.body.image
      }

      
      const response = await ThemeModel.create(theme);

      res.status(201).json({ response, msg:"Tema criado com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const services = await ThemeModel.find();

      res.json(services)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const theme = await ThemeModel.findById(id);

      if(!theme) {
        res.status(404).json({msg: "Tema não encontrado!"})
        return;
      }

      res.json(theme);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const theme = await ThemeModel.findById(id);

      if(!theme) {
        res.status(404).json({msg: "Tema não encontrado!"})
        return;
      }

      const deletedTheme = await ThemeModel.findByIdAndDelete(id)

      res.status(200).json({deletedTheme, msg: "Tema excluído com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const theme = {
      theme: req.body.theme, 
      description: req.body.description,
      image: req.body.image
    }

    
    const updatedTheme = await ThemeModel.findByIdAndUpdate(id, theme);

    if(!updatedTheme) {
      res.status(404).json({msg: "Tema não encontrado!"})
      return;
    }

    res.status(200).json({ theme, msg:"Tema atualizado com sucesso!"})

  }


}

module.exports = themeController;
const { Image: ImageModel} = require("../models/Image");

const imageController = {
  create: async(req, res) => {
    try {
     
      const {name} = req.body 
      const file = req.file

      const image = new ImageModel({
        name,
        src: file.path
      })

      await image.save()
      
      res.status(201).json({msg:"Imagem salva com sucesso!", image})

    } catch (error) {
      res.status(500).json({msg: "Erro ao salvar a imagem!"})
      console.log(error)
    }
  },
  getAll: async(req,res) => {
    try {

      const images = await ImageModel.find();

      res.json(images)
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagens!"})
      console.log(error)
    }
  },
  get: async(req,res) => {
    try {

      const id = req.params.id
      const image = await ImageModel.findById(id);

      if(!image) {
        res.status(404).json({msg: "Imagem não encontrada!"})
        return;
      }

      res.json(image);
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagem!"})
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const image = await ImageModel.findById(id);

      if(!image) {
        res.status(404).json({msg: "Imagem não encontrada!"})
        return;
      }

      const deletedlevel = await ImageModel.findByIdAndDelete(id)

      res.status(200).json({deletedlevel, msg: "Imagem excluída com sucesso!"})
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagem!"})
      console.log(error)
    }
  }
}

module.exports = imageController;
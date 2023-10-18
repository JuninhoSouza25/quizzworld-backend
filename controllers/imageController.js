const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const { Image: ImageModel} = require("../models/Image");

const fs = require("fs")

let gfs;
    mongoose.connection.once('open', () => {
        gfs = Grid(mongoose.connection.db, mongoose.mongo);
        gfs.collection('images'); // Nome da coleção no MongoDB onde as imagens estão armazenadas
    });

const imageController = {
  create: async(req, res) => {
    try {
     
   
      const file = req.file

      console.log(file)

      const image = new ImageModel({
        name: file.filename,
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

      fs.unlinkSync(image.src)

      await ImageModel.findByIdAndDelete(id)

      res.status(200).json({msg: "Imagem excluída com sucesso!"})
      
    } catch (error) {
      res.status(500).json({msg: "Erro ao buscar imagem!"})
      console.log(error)
    }
  },
  // getImage: async(req,res) =>{

  //   gfs.files.findOne({ filename: req.params.filename},
  //     (err, file) => {
  //       if (!file || file.length === 0) {
  //           return res.status(404).json({ err: 'Imagem não encontrada' });
  //       }

  //       if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
  //         // Criar um fluxo de leitura do GridFS
  //         const readstream = gfs.createReadStream(file.filename);
  //         readstream.pipe(res);
  //     } else {
  //         res.status(404).json({ err: 'Arquivo não é uma imagem' });
  //     }
  //   })
  // }
}

module.exports = imageController;
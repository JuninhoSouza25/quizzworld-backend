const { User: UserModel } = require("../models/User");
const bcrypt = require('bcrypt');

const userController = {
  create: async(req, res) => {
    try {
      
      const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        role: req.body.role,
        thumbnail: req.body.thumbnail,
      }
      
      if (user.password !== user.confirmpassword){
        return res.status(401).json({msg: "As senhas devem ser iguais"})
      }

      const emailExists = await UserModel.findOne({email: user.email})

      if(emailExists) {
        return res.status(401).json({msg: `Email ${emailExists.email} já cadastrado`})
      }

      const usernameExists = await UserModel.findOne({username: user.username})

      if(usernameExists) {
        return res.status(401).json({msg: `Username ${usernameExists.username} já cadastrado`})
      }

      // Create password

     const salt = await bcrypt.genSalt()
     const passwordHash = await bcrypt.hash(user.password, salt)

      const response = await UserModel.create({
        name: user.name,
        username: user.username,
        email: user.email,
        password: passwordHash,
        role: user.role,
        thumbnail: user.thumbnail,
      });

      res.status(201).json({ response, msg:"Usuário criado com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const user = await UserModel.find();

      res.json(user)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async (req, res) => {
    try {
      const id = req.params.id
      const user = await UserModel.findById(id, '-password');

      if(!user) {
        res.status(404).json({msg: "Usuário não encontrado!"})
        return;
      }

      res.status(200).json({user});

      
    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const user = await UserModel.findById(id);

      if(!user) {
        res.status(404).json({msg: "Usuário não encontrado!"})
        return;
      }

      const deletedUser = await UserModel.findByIdAndDelete(id)

      res.status(200).json({deletedUser, msg: "User excluído com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
      role: req.body.role,
      thumbnail: req.body.thumbnail,
    }

    
    const updatedUser = await UserModel.findByIdAndUpdate(id, user);

    if(!updatedUser) {
      res.status(404).json({msg: "User não encontrado!"})
      return;
    }

    res.status(200).json({user, msg:"User atualizado com sucesso!"})

  }


}

module.exports = userController;
const router = require("express").Router();
const { User: UserModel } = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router
  .route("/login")
  .post( async (req,res) => {
    
    try {
      const login = {
        email: req.body.email,
        password: req.body.password
      }
  
      if (!login.email){
        return res.status(422).json({msg: "Email é obrigatório!"})
      }
  
      if (!login.password){
        return res.status(422).json({msg: "Password é obrigatório!"})
      }

      const user = await UserModel.findOne({email: login.email})

      if(!user) {
        return res.status(404).json({msg: `Email ${user.email}não encontrado`})
      }
      
      const checkPassword = await bcrypt.compare(login.password, user.password)

      if(!checkPassword) {
        return res.status(422).json({msg: `Senha inválida`})
      }
      
      try {
        
        const secret = process.env.SECRET

        const token = jwt.sign(
          {
            id: user._id,
          },
          secret
        )

        res.status(200).json({msg: "Autenticação realizada com sucesso! ", token})

      } catch (error) {
        console.log(error)
      }

    } catch (error) {
      console.log(error)
    }
     
  });



module.exports = router;
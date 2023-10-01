const { Question: QuestionModel } = require("../models/Question");

const questionController = {

  create: async(req, res) => {
    try {
      
      const question = {
        question: req.body.question,
        theme: req.body.theme, 
        options: req.body.options,
        answer: req.body.answer,
        level: req.body.level,
        image: req.body.image
      };

      const response = await QuestionModel.create(question);

      res.status(201).json({ response, msg:"Questão criada com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const question = await QuestionModel.find();

      res.json(question)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const question = await QuestionModel.findById(id);

      if(!question) {
        res.status(404).json({msg: "Questão não encontrado!"})
        return;
      }

      res.json(question);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const question = await QuestionModel.findById(id);

      if(!question) {
        res.status(404).json({msg: "Questão não encontrado!"})
        return;
      }

      const deletedQuestion = await QuestionModel.findByIdAndDelete(id)

      res.status(200).json({deletedQuestion, msg: "Questão excluído com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const question = {
      question: req.body.question,
      theme: req.body.theme, 
      options: req.body.options,
      answer: req.body.answer,
      level: req.body.level,
      image: req.body.image
    }

    
    const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, question);

    if(!updatedQuestion) {
      res.status(404).json({msg: "Questão não encontrado!"})
      return;
    }

    res.status(200).json({ question, msg:"Questão atualizado com sucesso!"})

  }

}

module.exports = questionController;
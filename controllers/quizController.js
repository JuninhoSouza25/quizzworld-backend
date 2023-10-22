const { Quiz: QuizModel } = require("../models/Quiz");

const quizController = {

  create: async(req, res) => {
    try {
      
      const quiz = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        questions: req.body.questions,
        theme: req.body.theme,
        level: req.body.level,
        image: req.body.image
      };

      const response = await QuizModel.create(quiz);

      res.status(201).json({ response, msg:"Quiz criado com sucesso!"})

    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {

    try {

      const quiz = await QuizModel.find();

      res.json(quiz)
      
    } catch (error) {
      console.log(error)
    }

  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const quiz = await QuizModel.findById(id);

      if(!quiz) {
        res.status(404).json({msg: "Quiz não encontrado!"})
        return;
      }

      res.json(quiz);

    } catch (error) {
      console.log(error)
    }
  },
  delete: async(req, res) => {

    try {
      const id = req.params.id
      const quiz = await QuizModel.findById(id);

      if(!quiz) {
        res.status(404).json({msg: "Quiz não encontrado!"})
        return;
      }

      const deletedQuestion = await QuizModel.findByIdAndDelete(id)

      res.status(200).json({deletedQuestion, msg: "Quiz excluído com sucesso"})
      
    } catch (error) {
      console.log(error)
    }
  },
  update: async(req, res) => {
    
    const id = req.params.id

    const quiz = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      questions: req.body.questions,
      theme: req.body.theme,
      level: req.body.level,
      image: req.body.image
    }

    
    const updatedQuiz = await QuizModel.findByIdAndUpdate(id, quiz);

    if(!updatedQuiz) {
      res.status(404).json({msg: "Quiz não encontrado!"})
      return;
    }

    res.status(200).json({ quiz, msg:"Quiz atualizado com sucesso!"})

  }

}

module.exports = quizController;
const uploadImage = require('../config/multer')

const router = require("express").Router()

// Themes Routes

const themeRouter = require("./themes")

router.use("/", themeRouter)

// Themes Routes

const categoryController = require("./categories")

router.use("/", categoryController)

// Levels Routes

const levelRouter = require("./levels")

router.use("/", levelRouter)

// Questions Routes

const questionRouter = require("./questions")

router.use("/", questionRouter)

// User Routes

const userRouter = require("./users")

router.use("/", userRouter)

// Login Routes

const loginRouter = require("./login")

router.use("/", loginRouter)

// Roles Routes

const rolesRouter = require("./roles")

router.use("/", rolesRouter)

// Image Routes

const imagesRouter = require("./images")
const firebaseImage = require("../db/firebase")

router.use("/", uploadImage.single("file"), firebaseImage, imagesRouter)


module.exports = router;
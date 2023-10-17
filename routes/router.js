const uploadImage = require('../config/multer')

const router = require("express").Router()

// Themes Routes

const themeRouter = require("./themes")

router.use("/", themeRouter)

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

router.use("/", uploadImage.single("file"), imagesRouter)


module.exports = router;
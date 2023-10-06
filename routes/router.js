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

module.exports = router;
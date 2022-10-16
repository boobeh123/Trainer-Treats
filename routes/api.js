const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api')

router.get('/', apiController.getIndex)
// router.get('/api', apiController.getTodos)
// router.get('/api:id', todosController.getTodos)
router.post('/stretches', apiController.createStretch)

// router.post('/createTodo', todosController.createTodo)
// router.put('/markComplete', todosController.markComplete)
// router.put('/markIncomplete', todosController.markIncomplete)
// router.delete('/deleteTodo', todosController.deleteTodo)

// router.get("/", apiController.getIndex);
// router.get("/games", apiController.getGames);
// router.get("/games/:gameId", apiController.getGameById);
// router.post("/games", apiController.postGame);

module.exports = router
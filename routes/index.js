var express = require('express');
var router = express.Router();

//Importamos el controlador de la pregunta
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


//Registrar las nuevas rutas en el enrutador.
// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);


//Registrar la ruta de créditos
/*GET author*/router.get('/author', function(req, res) {
  res.render('author');
});


module.exports = router;

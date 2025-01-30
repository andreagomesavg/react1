const express = require('express');
const movieCtrl = require('../controllers/movie.controller');
const router = express.Router();
router.get('/', movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.post('/', movieCtrl.addMovie);
router.put('/:id', movieCtrl.updateMovie);
router.delete('/:id', movieCtrl.deleteMovie);

module.exports = router;
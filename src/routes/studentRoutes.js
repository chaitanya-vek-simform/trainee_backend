const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes
router.get('/students', studentController.getAllStudents);

router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;

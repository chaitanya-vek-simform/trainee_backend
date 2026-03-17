const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes
router.get('/items', studentController.getAllStudents); // Returns all students as per requirements
router.get('/students', studentController.getAllStudents); // Standard REST alias

router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);

module.exports = router;

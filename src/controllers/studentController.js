const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.getAll();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error while fetching students.' });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, description } = req.body; // Getting description as requested
        
        // Map description to department based on table schema requirements
        const department = description || req.body.department;

        if (!name || !department) {
            return res.status(400).json({ message: 'Name and description/department are required.' });
        }

        const id = await Student.create({ name, department });
        res.status(201).json({ 
            id, 
            name, 
            department,
            message: 'Student created successfully.' 
        });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ message: 'Internal server error while creating student.' });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        
        // Map description to department
        const department = description || req.body.department;

        if (!name || !department) {
            return res.status(400).json({ message: 'Name and description/department are required.' });
        }

        const affectedRows = await Student.update(id, { name, department });
        
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found.' });
        }

        res.status(200).json({ 
            id, 
            name, 
            department,
            message: 'Student updated successfully.' 
        });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ message: 'Internal server error while updating student.' });
    }
};

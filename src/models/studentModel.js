const db = require('../config/db');

class Student {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM students ORDER BY created_at DESC');
        return rows;
    }

    static async create(studentData) {
        const { name, department } = studentData;
        const [result] = await db.query(
            'INSERT INTO students (name, department) VALUES (?, ?)',
            [name, department]
        );
        return result.insertId;
    }

    static async update(id, studentData) {
        const { name, department } = studentData;
        const [result] = await db.query(
            'UPDATE students SET name = ?, department = ? WHERE id = ?',
            [name, department, id]
        );
        return result.affectedRows;
    }
}

module.exports = Student;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
INSERT INTO students (student_id, full_name, age, course, email)
VALUES (1, 'Rahul ', 20, 'BCA', 'rahul@example.com');
INSERT INTO students (student_id, full_name, age, course, email)
VALUES 
(2, 'Priya ', 19, 'B.Sc Computer Science', 'priya@example.com'),
(3, 'Arun ', 21, 'BBA', 'arun@example.com'),
(4, 'Sneha ', 20, 'B.Tech', 'sneha@example.com');
INSERT INTO students (student_id, full_name, course)
VALUES (5, 'Karan ', 'BCA');
INSERT INTO students (student_id, full_name)
VALUES (6, 'Lavanya R');

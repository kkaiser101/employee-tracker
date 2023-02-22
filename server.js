const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'EldenRing2022$',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`),
);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

async function mainPrompt() {
  inquirer.prompt([
    {
      name: 'main_menu',
      type: 'list',
      message: 'Select an option:',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee',
        'Exit'
      ]
    }
  ])
  .then((response) => {

    if (response = 'View All Departments'){
      db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
      });
    }

    if (response = 'View All Roles'){
      db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
      });
    }

    if (response = 'View All Employees'){
      db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
      });
    }

  });
};

mainPrompt();



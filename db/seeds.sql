INSERT INTO department(department_name)
VALUES ("Sales Team"), 
       ("R&D"), 
       ("Legal"), 
       ("Accounting"), 
       ("Finance"), 
       ("Marketing");

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Representative", 60000, 1), 
       ("Senior Researcher", 150000, 2), 
       ("Chief Attorney", 350000, 3), 
       ("Senior Accounts Payable Professional", 100000, 4),
       ("Corporate Financial Advisor", 250000, 5),
       ("Marketing Specialist", 100000, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL), 
       ("Thorin", "Bronzebeard", 2, NULL), 
       ("Thor", "Odinson", 3, 2), 
       ("Kratos", "Ofsparta", 4, 2), 
       ("Handsome", "Jack", 5, NULL),
       ("Karl", "Franz", 6, NULL);

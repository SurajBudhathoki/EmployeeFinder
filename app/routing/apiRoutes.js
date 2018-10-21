//linking routes to our data

const employeesList = require('../data/employees.js');



//routing

module.exports = function(app) {

    //getting all employees
    app.get('/api/employees', function(req,res) {
        res.json(employeesList);
    });

    //getting specific employees
    app.get('/api/employees/:index', function(req,res){
        res.json(employeesList[req.params.index]);
    });

}
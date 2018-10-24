//linking routes to our data

const employeesList = require('../data/employees.js');



//routing

module.exports = function (app) {

    //getting all employees
    app.get('/api/employees', function (req, res) {
        res.json(employeesList);
    });


    //a post request to handle survey results
    app.post('/api/employees', function (req, res) {


        //creating an object for the best match    
        var bestMatch = {
            name: "",
            photo: "",
            totalScore: 50
        };


        var newScores = req.body.scores;
        var newEmployee = req.body;

        var total;

        //looping the entire employeeList  
        for (let i = 0; i < employeesList.length; i++) {

            total = 0;

            //nested loop to loop throught the scores array
            for (let j = 0; j < employeesList[i].scores[j]; j++) {

                //calculating the difference between the scores and adding it to the total 
                total += Math.abs(parseInt(newScores[j]) - parseInt(employeesList[i].scores[j]));


                //assigning the bestMatch after comparing the scores
                if (total <= bestMatch.totalScore) {

                    bestMatch.name = employeesList[i].name;
                    bestMatch.photo = employeesList[i].photo;
                    bestMatch.totalScore = total;

                }
            }

        }

        //adding the employee from the survey to our employeeList
        employeesList.push(newEmployee);


        console.log(bestMatch);

        //sending the best match from our list back to the html
        res.json(bestMatch);

    })
}


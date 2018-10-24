
$(function () {

  // replacing the original label with the uploaded file
  $('#employeeImage').on('change', function () {
    var fileName = $(this).val();
    $(this).next('.custom-file-label').html(fileName);
  })

  //on click function
  $('#submit').on('click', function (event) {

    event.preventDefault();


    const validateForm = function () {
      let isValid = true;

      // Using jQuery's each method, loop through the inputs
      $('input').each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      // Using jQuery's each method, loop through the select elements
      $('.sel').each(function () {

        if ($(this).val() === "") {
          isValid = false;
        }
      });

      return isValid;
    }


    if (validateForm()) {

      //creating an object for the user input  
      var newEmployee = {
        name: $('#employeeName').val().trim(),
        photo: $('#employeeImage').val().trim(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      //using POST to send user input to the API
      $.post('/api/employees', newEmployee, function (data) {
        $('#newEmp').text(data.name);
        $('#newpic').attr('src', data.photo);

        $("#myModal").modal("toggle");
      });


      //removing error message after successful validation 
      $('#error').empty("");

      //clearing all fields after successful validation
      $('#employeeName').val("");
      $('#employeeImage').val("");
      $('#q1').val("");
      $('#q2').val("");
      $('#q3').val("");
      $('#q4').val("");
      $('#q5').val("");
      $('#q6').val("");
      $('#q7').val("");
      $('#q8').val("");
      $('#q9').val("");
      $('#q10').val("");
    }

    else {
      $('#error').text('Please enter all fields!').css({ "color": "red", "font-size": "200%" });
    }

    return false;

  });


})

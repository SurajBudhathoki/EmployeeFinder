
$(function() {



$('#submit').on('click', function(event) {
    event.preventDefault();


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

  $.post('/api/employees', newEmployee, function(data) {
        $('#newEmp').text(data.name);
        $('#newpic').attr('src', data.photo);


  })



});






})

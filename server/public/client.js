console.log('sourced');
$(document).ready(function(){
  console.log('jquery was sourced');
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response){
      console.log('response', response);
      for (var i = 0; i < response.length; i++) {
        $('#fishTank').append('<li>' + response[i].name + '</li>');
      } //end for
      $('#firstFishy').text(response[0].name); 
    } // end of success
  });// end of AJAX request

  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response){
      console.log('response', response);
      $('#firstFishy').text(response);
    } // end of success
  });// end of AJAX request





}); // end doc ready

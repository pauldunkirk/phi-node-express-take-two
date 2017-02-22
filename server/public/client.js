console.log('sourced');
$(document).ready(function() {
    console.log('jquery was sourced');
    getFishData();
    function getFishData() {
        $.ajax({
            type: 'GET',
            url: '/fish',
            success: function(response) {
                console.log('response', response);
                $('#fishTank').empty();
                for (var i = 0; i < response.length; i++) {
                    $('#fishTank').append('<li>' + response[i].name + '</li>');
                } //end for
                $('#firstFishy').text(response[0].name);
            } // end of success
        }); // end of AJAX request


        $.ajax({
            type: 'GET',
            url: '/fish/first/name',
            success: function(response) {
                console.log('response', response);
                $('#firstFishy').text(response);
            } // end of success
        }); // end of AJAX request
    }

    $('#newFishButton').on('click', function() {
        $('#error').empty();
        var newFishObject = {};
        newFishObject.name = $('#newFishName').val();
        $.ajax({
            type: 'POST',
            url: '/fish/new',
            data: newFishObject,
            success: function(response) {
              console.log(response);
              getFishData();
            }, //end success
            error: function(error){
        console.log('error', error);
        $('#error').text('Please enter a fish name before clicking');
      }
        }); //end AJAX
    }); // end on click
}); // end doc ready

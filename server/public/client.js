$(onReady);

function onReady() {
    console.log( 'working' );

    $( '#equals' ).on( 'click', doMath );
    $( '#clear' ).on( 'click', clearInputs );

}

let equation = [];

function doMath() {
    let num1 = $('#firstNumber').val();
    let num2 = $('#secondNumber').val();
    let operator = $('#math option:selected').val();

    // equation = [num1, operator, num2];

    console.log(equation);

    // let data = {
    //     equation
    // }

    if (num1.length === 0 || num2.length === 0) {
        alert('Error: at least one number field is empty.')
    }
    else {
        let data = {
            num1,
            operator,
            num2
        }

        console.log(data);

        $.ajax({
            url: '/calculate',
            method: 'POST',
            // contentType: 'application/json; charset=UTF-8',
            data: data
            // dataType: 'json'
        }).then(function(response){
            getResult();
            getHistory();
        }).catch(function(error){
            console.log('Error retrieving data', error);
        });
    }
};

function getResult() {
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function (response) {
        $('#displayResult').empty();
        $('#displayResult').append(response);
    });
};

function getHistory() {
    $.ajax({
        type: 'GET',
        url: '/calculationhistory'
    }).then(function (response) {
        // response should be array of strings.
        $('#history').empty();

            for ( i = 0; i < response.length; i++ ){
                $('#history').append(`<li>${response[i]}</li>`);
            }
    });
}

function clearInputs() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    // $('#math').val(''); // Works, but is it needed?
}
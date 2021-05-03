// For use in stretch goal

function math(array){

    for ( i = 0; i < array.length; i++ ) {
        if ( array[i] === '*' || array[i] === '/' ) {
            if ( array[i] === '*' ){
                let result = array[i-1] * array[i+1];
                    array[i-1] = result;
                    array.splice( i, 2 );
                    i = 0;
            }
            else {
                let result = array[i-1] / array[i+1];
                    array[i-1] = result;
                    array.splice( i, 2 );
                    i = 0;
            }
        }
    }
    // The above will cycle through the array looking for division and multiplication. When it finds the proper operator
    // it will take the items in the index before and after it and apply the appropriate math and start looking for the
    // proper operator again.
    for ( i = 0; i < array.length; i++ ) {
        if ( array[i] === '+' || array[i] === '-' ) {
            if ( array[i] === '+' ){
                let result = array[i-1] + array[i+1];
                    array[i-1] = result;
                    array.splice( i, 2 );
                    i = 0;
            }
            else {
                let result = array[i-1] - array[i+1];
                    array[i-1] = result;
                    array.splice( i, 2 );
                    i = 0;
            }
        }
    }
    // Then it will restart the process, but this time look for additon and subtraction, thus following the Order of Operations.
};
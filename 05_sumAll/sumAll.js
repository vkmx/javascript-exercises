const sumAll = function( num1, num2 ) {

    let result;

    if( Number.isInteger(num1) && Number.isInteger(num2) ) {

        let n = 0;

        if( num2 > num1 ){
            n = (num2 - num1) + 1;
        }

        if( num1 > num2 ){
            n = (num1 - num2) + 1;
        }

        if( n < 0 || num1 < 0 || num2 < 0 ){
            result = 'ERROR'
        } else {
            result = n / 2 * ( num1 + num2 );
        }

    } else {
        result = 'ERROR';
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;

const reverseString = function(string) {

    let stringLength    = string.length;
    let reversedString  = '';

    do {

        if( stringLength === 0 ){
            continue;
        }

        let i = stringLength - 1;
        reversedString = reversedString.concat( string[i] );
        stringLength--;
    } while ( stringLength > 0 );

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

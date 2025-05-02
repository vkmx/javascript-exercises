const palindromes = function ( string ) {
    let reversed = string.toLowerCase().split('').filter( ( character ) => /[a-zA-Z0-9]/.test( character ) ).reverse().join('');

    return reversed === string.toLowerCase().replace( /[^a-zA-Z0-9]/g, '' ) ;
};

// Do not edit below this line
module.exports = palindromes;

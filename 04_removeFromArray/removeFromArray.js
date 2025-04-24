const removeFromArray = function( array, ...valuesToRemove ) {
    let filteredArray = array.filter( (value) => ! valuesToRemove.includes(value) );

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

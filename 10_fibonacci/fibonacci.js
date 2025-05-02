const fibonacci = function( positionInSequence ) {

    positionInSequence = Number( positionInSequence );

    if( positionInSequence < 0 ) return 'OOPS';

    let sequence = [0];
    let counter = 0;

    while ( counter < positionInSequence ){
        let currentItem = sequence[counter];
        let penultimateItem = sequence[counter-1];

        if( penultimateItem === undefined ){
            penultimateItem = 1;
        }

        let val = currentItem + penultimateItem;
        sequence.push( val );
        counter++;
    }

    return sequence[positionInSequence];
};

// Do not edit below this line
module.exports = fibonacci;

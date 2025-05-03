const findTheOldest = function( people ) {
    peopleWithAges = people.map( ( person ) => {

        if( ! person.hasOwnProperty( 'yearOfDeath' ) ) person.yearOfDeath = new Date().getFullYear(); //yes, I just deleted the person

        person.age = new Date( person.yearOfDeath ) - new Date( person.yearOfBirth );

        return person;
    });

    peopleWithAges.sort( ( a, b ) => {
        if( a.age < b.age ) return 1;
        if( a.age > b.age ) return -1;
        if( a.age === b.age ) return 0;

    } );

    return peopleWithAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;

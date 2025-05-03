const getTheTitles = function( books ) {
    let titles = books
        .reduce( ( title, book ) => title + book.title + ',', '' )
        .split( ',' )
        .filter( ( title ) => title !== '' );
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

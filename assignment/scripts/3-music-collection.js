console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];


function addToCollection(Collection, title, artist, yearPublished){
let record = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
};

Collection.push(record);
return record;
}

console.log(addToCollection(myCollection, 'Hey you', 'Mocha', '2023'));
console.log(addToCollection(myCollection, 'Hey me','Mocha','2023'));
console.log(addToCollection(myCollection, 'BYE','Pe$o Pluma', '2023'));
console.log(addToCollection(myCollection,'Piece of me','Britney Spears','2007'));
console.log(addToCollection(myCollection,'Everytime','Britney Spears','2003'));
console.log(addToCollection(myCollection,'Sometimes','Britney Spears','1998'));

console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++){
    let record = collection[i];
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
  }
}

showCollection(myCollection);


function findByArtist(collection, artist){
  let matchingArtists = [];

  for (let i = 0; i < collection.length; i++) {
    let record = collection[i];
    if (record.artist === artist){
      matchingArtists.push(record);
    }

  }

  return matchingArtists;
}

console.log(findByArtist(myCollection, 'Mocha'));
console.log(findByArtist(myCollection,'Eminem'));

// - Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter
//   - Create an empty array to hold any matching results, if any
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

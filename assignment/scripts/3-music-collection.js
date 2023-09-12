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

// - Use and Test the `addToCollection` function:
//   - Add 6 albums to **your** collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - `console.log`` each album as added using the function's returned value.
//   - After all are added, console.log the `collection` array.



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

const axios = require('axios');


export const getRatings = async (charactersAndBooks) => {
  const getBookRatings = async (isbns) => {
    try {
      const bookRatings = await axios.get('https://www.goodreads.com/book/review_counts.json', {
        params: {
          key: process.env.goodreadsPublicKey,
          isbns: isbns
        }
      });
      return bookRatings.data.books.map(book => book.average_rating);
    } catch (error) {
      throw new Error(error);
    }
  };

  const bookRatings = async (isbns) => {
    const ratings = await getBookRatings(isbns);

    const books = [];
    charactersAndBooks.books.forEach((book, index) => (books.push({"name": book.name, "rating": ratings[index]})));

    return books;
  };

  const reformData = (charactersAndBooks) => {
    const isbnArray = charactersAndBooks.books.map(book => book.isbn.replace('-', ''));
    const isbnString = isbnArray.join(',');
    return isbnString;
  };

  const isbns = await reformData(charactersAndBooks);
  const books = await bookRatings(isbns);

  return {
    "characters": charactersAndBooks.characters,
    "books": books
  };
};

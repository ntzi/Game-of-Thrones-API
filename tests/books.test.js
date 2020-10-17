import { getBooks } from "../libs/books-lib";


test("Case 1", async () => {
  const input = {
    characters: [ { name: 'Jon Snow' }, { name: 'Eddard Stark' } ],
    bookUrls: [
      'https://anapioficeandfire.com/api/books/5',
      'https://anapioficeandfire.com/api/books/1',
      'https://anapioficeandfire.com/api/books/2',
      'https://anapioficeandfire.com/api/books/3',
      'https://anapioficeandfire.com/api/books/8'
    ]
  };

  const expectedOutput = {
    characters: [ { name: 'Jon Snow' }, { name: 'Eddard Stark' } ],
    books: [
      { name: 'A Feast for Crows', isbn: '978-0553801507' },
      { name: 'A Game of Thrones', isbn: '978-0553103540' },
      { name: 'A Clash of Kings', isbn: '978-0553108033' },
      { name: 'A Storm of Swords', isbn: '978-0553106633' },
      { name: 'A Dance with Dragons', isbn: '978-0553801477' }
    ]
  };

  const output = await getBooks(input);

  expect(output).toEqual(expectedOutput);
});

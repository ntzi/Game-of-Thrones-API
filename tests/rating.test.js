/**
 * @jest-environment node
 */

import { getRatings } from "../libs/rating-lib";


test("Case 1", async () => {
  const input = {
    characters: [ { name: 'Jon Snow' }, { name: 'Eddard Stark' } ],
    books: [
      { name: 'A Feast for Crows', isbn: '978-0553801507' },
      { name: 'A Game of Thrones', isbn: '978-0553103540' },
      { name: 'A Clash of Kings', isbn: '978-0553108033' },
      { name: 'A Storm of Swords', isbn: '978-0553106633' },
      { name: 'A Dance with Dragons', isbn: '978-0553801477' }
    ]
  };



  const expectedOutput = {
    characters: [ { name: 'Jon Snow' }, { name: 'Eddard Stark' } ],
    books: [
      { name: 'A Feast for Crows', rating: '4.14' },
      { name: 'A Game of Thrones', rating: '4.45' },
      { name: 'A Clash of Kings', rating: '4.41' },
      { name: 'A Storm of Swords', rating: '4.54' },
      { name: 'A Dance with Dragons', rating: '4.32' }
    ]
  };

  const output = await getRatings(input);

  expect(output).toEqual(expectedOutput);
});

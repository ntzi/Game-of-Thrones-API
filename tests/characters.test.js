import { getCharactersAndBookUrls } from "../libs/characters-lib";


test("Case 1", async () => {
  const id1 = "583";
  const id2 = "339";

  const expectedOutput = {
    characters: [ { name: 'Jon Snow' }, { name: 'Eddard Stark' } ],
    bookUrls: [
      'https://anapioficeandfire.com/api/books/5',
      'https://anapioficeandfire.com/api/books/1',
      'https://anapioficeandfire.com/api/books/2',
      'https://anapioficeandfire.com/api/books/3',
      'https://anapioficeandfire.com/api/books/8'
    ]
  };
  const output = await getCharactersAndBookUrls(id1, id2);

  expect(output).toEqual(expectedOutput);
});

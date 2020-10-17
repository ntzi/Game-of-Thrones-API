const axios = require('axios');


export const getCharactersAndBookUrls = async (id1, id2) => {
  const getChars = async () => {
    try {
      const charRequest1 = await axios.get(`https://anapioficeandfire.com/api/characters/${id1}`);
      const charRequest2 = await axios.get(`https://anapioficeandfire.com/api/characters/${id2}`);
      return {
        charRequest1: charRequest1,
        charRequest2: charRequest2
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  const charsNamesAndbookUrlss = async () => {
    const chars = await getChars();
    let bookUrls = [];

    if (! chars.charRequest1.data.name) {
      throw new Error(`No name found for character id=${id1}`);
    }
    if (! chars.charRequest2.data.name) {
      throw new Error(`No name found for character id=${id2}`);
    }

    chars.charRequest1.data.books.map(item => bookUrls.push(item));
    chars.charRequest1.data.povBooks.map(item => bookUrls.push(item));
    chars.charRequest2.data.books.map(item => bookUrls.push(item));
    chars.charRequest2.data.povBooks.map(item => bookUrls.push(item));

    const count = bookUrls =>
      bookUrls.reduce((a, b) =>
        Object.assign(a, {[b]: (a[b] || 0) + 1}), {});

    const duplicates = dict =>
      Object.keys(dict).filter((a) => dict[a] > 1);

    // Keep the duplicates.
    bookUrls = duplicates(count(bookUrls));

    return {
      "characters": [
        {"name": chars.charRequest1.data.name},
        {"name": chars.charRequest2.data.name}
      ],
      "bookUrls": bookUrls
    };
  };

  return await charsNamesAndbookUrlss();
};

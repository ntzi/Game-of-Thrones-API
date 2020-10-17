const axios = require('axios');


export const getBooks = async (charactersAndBookUrls) => {
  const getSingleBookInfo = async (url) => {
    try {
      const bookRequest = await axios.get(url);
      return {
        "name": bookRequest.data.name,
        "isbn": bookRequest.data.isbn
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  const getAllBookInfo = async (charactersAndBookUrls) => {
    const promises1 = await charactersAndBookUrls.bookUrls.map(url => getSingleBookInfo(url));
    const bookNamesAndIsbn = await Promise.all(promises1);

    return {
      "characters": charactersAndBookUrls.characters,
      "books": bookNamesAndIsbn
    };
  };

  return await getAllBookInfo(charactersAndBookUrls);
};

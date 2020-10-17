import handler from "./libs/handler-lib";
import { getCharactersAndBookUrls } from "./libs/characters-lib";
import { getBooks } from "./libs/books-lib";
import { getRatings } from "./libs/rating-lib";


export const main = handler(async (event, context) => {
  const charactersAndBookUrls = await getCharactersAndBookUrls(event.queryStringParameters.id1, event.queryStringParameters.id2);
  const charactersAndBooks = await getBooks(charactersAndBookUrls);
  const charactersBooksRatings = await getRatings(charactersAndBooks);

  return charactersBooksRatings;
});

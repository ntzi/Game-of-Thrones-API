# Game of Thrones - API

#### Find books and ratings for specific Game of Thrones characters

Taking two character IDs from the [Game of Thrones API](https://anapioficeandfire.com), finds the characters names and any books in which both characters appear, plus the average vote for those books (using [Goodreads API](https://www.goodreads.com/api/index)).



## Use
Send a GET request to endpoint:

https://r4942n8jq0.execute-api.us-east-1.amazonaws.com/dev/books

with parameters:
 - id1: The ID of the first character
 - id2: The ID of the second character


### Example
Request:

https://r4942n8jq0.execute-api.us-east-1.amazonaws.com/dev/books?id1=583&id2=339

Response:

    {
       "characters":[
          {
             "name":"Jon Snow"
          },
          {
             "name":"Eddard Stark"
          }
       ],
       "books":[
          {
             "name":"A Feast for Crows",
             "rating":"4.14"
          },
          {
             "name":"A Game of Thrones",
             "rating":"4.45"
          },
          {
             "name":"A Clash of Kings",
             "rating":"4.41"
          },
          {
             "name":"A Storm of Swords",
             "rating":"4.54"
          },
          {
             "name":"A Dance with Dragons",
             "rating":"4.32"
          }
       ]
    }



## Deploy
### Deploy locally
#### Prerequisites
 - NodeJS, npm

#### Steps
- Clone master branch

      $ git clone https://github.com/ntzi/Game-of-Thrones-API.git
      
- Install  dependencies

      $ npm install


#### Tests

    $ npm test



### Deploy on AWS Lambda

The project is ready to be deployed on AWS Lambda.

#### Prerequisites

- serverless

#### Steps
- Install serverless

      $ npm install -g serverless

More info about installation [here](https://www.serverless.com/framework/docs/getting-started/).

- Get your AWS credential

      $ export AWS_ACCESS_KEY_ID=<your-key-here>
      $ export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>

More info about AWS credential [here](http://slss.io/aws-creds-setup).

- Create .env file in *game-of-thrones-api/* directory.\
   .env file must include the public api key of personal account in Goodreads.\
   Example .env file:\

      GOODREADS_PUBLIC_KEY=<my-public-key>

- Deploy

      $ serverless deploy

- Mock Run Locally

      $ serverless invoke local --function get --path mocks/get-event.json
    
    If everything works fine it should return something like
    
      {
          "statusCode": 200,
          "body": "{\"characters\":[{\"name\":\"Jon Snow\"},{\"name\":\"Eddard Stark\"}],\"books\":[{\"name\":\"A Feast for Crows\",\"rating\":\"4.14\"},{\"name\":\"A Game of Thrones\",\"rating\":\"4.45\"},{\"name\":\"A Clash of Kings\",\"rating\":\"4.41\"},{\"name\":\"A Storm of Swords\",\"rating\":\"4.54\"},{\"name\":\"A Dance with Dragons\",\"rating\":\"4.32\"}]}"
      }
    

- Make a request to the generated GET endpoint


 ## Authors

 * **Nikos Tziralis** - *Initial work* - [Game of Thrones - API](https://github.com/ntzi/Game-of-Thrones-API)

 ## License

 This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

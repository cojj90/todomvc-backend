## Description
This is a simple backend for [todomvc](http://todomvc.com/examples/react) app. 

## Installation

```bash
$ npm install
```

## DB Configuration
Please configure following enviroment variables to establish a database connection.

```command
DB_TYPE (default: 'mysql')
DB_HOST (default: 'localhost')
DB_PORT (default: 3306)
DB_USERNAME (default: 'root')
DB_PASSWORD (default: '')
DB_DATABASE (default: 'test')
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Then navigate to `/graphql` to access GraphQL Playground

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

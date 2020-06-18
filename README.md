# Express Testing
_Express application to explore testing with Mocha, Chai and SuperTest_

# SuperTest

[![Coveralls][coverage-badge]][coverage]
[![Build Status][travis-badge]][travis]
[![Dependencies][dependencies-badge]][dependencies]
[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

HTTP assertions made easy via [superagent](http://github.com/visionmedia/superagent).

## About

The motivation with this module is to provide a high-level abstraction for testing
HTTP, while still allowing you to drop down to the [lower-level API](https://visionmedia.github.io/superagent/) provided by superagent.

## Getting Started

Install SuperTest as an npm module and save it to your package.json file as a development dependency:

```bash
npm install supertest --save-dev
```

  Once installed it can now be referenced by simply calling ```require('supertest');```


# NYT Best Sellers
_This is a demo project for Introduction to Express_

## Usage
Clone this repo then install dependencies

```bash
$ npm install
```

Start the server

```bash
$ npm start
```

## Test
Tests have not been implemented. Tests are introduced in the next lesson.

## Endpoints
Only one interesting endpoint: `/books` with parameters:

Parameter | Values | Description
--- | --- | ---
search | A string | return all books with that string in the title, if not provided return all books
sort | one of price or rank | sort the results by either price or rank, if not provided no sorting takes place

## Testing the nytServer App
Open the nytServer app that was built in the Introduction to Express lesson and prepare the app for testing.

Install Mocha, Chai, SuperTest as development dependencies
Create a new server.js file and move the app.listen statement over from app.js
Export app in the `app.js file
Update the scripts in package.json to run server.js instead of app.js
Create a folder named test
Create a file named test/app.test.js


## License

MIT


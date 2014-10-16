perfjankie-test
===============

Test script &amp; demo use case for [Perfjankie](https://www.npmjs.org/package/perfjankie)

To get this demo up & running:

- 1. `npm install` to install [Perfjankie](https://www.npmjs.org/package/perfjankie)
- 2. Install [CouchDB](http://couchdb.apache.org/) and launch it (Port 5984 is default)
- 3. Install [Selenium Standalone](https://www.npmjs.org/package/selenium-standalone) &amp; launch it with `start-selenium` (Port 4444 is default)
- 4. Start a simple webserver in the `button-sample` directory (Port 8080 is default. You can use `python -m SimpleHTTPServer 8080` if you have python installed)
- 5. Do a test run using `node index.js`
- 6. Uncomment the JS &amp; styles in the `button-sample` directory
- 7. Do another test run using `node index.js`
- 8. Go to [You local CouchDB Perfjankie app](http://localhost:5984/perfjankie-demo/_design/site/index.html#?component=Perfjankie%20Button&browser=chrome&metric=CompositeLayers) and check the recorded metrics from both testing sessions
# Image Gallery

The solution is divided in two different aplications: 'app' and 'api'. You need to install and run both at the same time for getting it to work.

## API

### Installation
Open the terminal and go to the 'api' folder
```
    cd api
```
Install dependencies.
```
    npm install
```

### Run the application
```
    npm run start
```
## APP
### Installation
Open another terminal and go to the 'app' folder
```
    cd app
```
Install dependencies.
```
    npm install
```

### Run the application
```
    npm run start
```

### When the build finishes and the server starts (and the API is running) navigate to:
```
    localhost:8080
```

### Run tests
The web application is covered with tests, please run them by typing:
```
    cd 'app'
```
```
    npm run test
```

## Technical considerations:

* **Web server:** The development server is a simple express static server.
* **Api server:** It's an express wrapper that will make the requests to the Flickr API, then transform and response the data to the web app.
* **SPA application**: The application is an SPA that handles the state by using Redux.
* **Building process:** The building process is handled entirely by Webpack.
* **Resources Management:** The javascript and css are bundled and there is only one file of each asset downloading to the client.
* **CSS Preprocessor:** The preprocessor used is SASS.
* **Javascript Code style:** The aplication is compliant with eslint, the style rules were extended from the [Airbnb recommended code styles rules for Javascript and React](https://github.com/airbnb/javascript)
* **Requirements:** The required features have been implemented. The application is responsive.
* The images are being loaded async.

## Some assumptions and decisions taken in the implementation:
- Important: The application runs on Node >= 8
- A random tag ("dogs") was selected for the images category to display.
- The infinite scroll approach was selected over the pagination. By using Redux, I assume the state handling is cleaner and more simple for that case. 
- In order to implement the infinite scroll, the React Waypoint component was used. This component rises an event once entered into the viewport. In order to give better controll to this component, I decided to keep all the thumbnail images squared.
- The error handling is showing a generic error message for any kind of error. This could be separated with different messages with more detail for each error.



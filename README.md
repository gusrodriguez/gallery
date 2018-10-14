# Image Gallery

## Installation
Install dependencies.
```
    npm install
```

## Run the application
```
    npm run start
```

## Navigate to:
```
    localhost:8080
```

## Run tests
The application is covered with tests, please run them by typing:
```
    npm run test
```

## Assumptions and desicions taken in the implementation:
- The infinite load approach was selected over the paged gallery. By using Redux, the state handling is more simple for that case. It's just a matter of updating the list of images in the state and Redux will do the rest with the view.
- In order to implement the infinite scroll, the React Waypoint component was used. This component rises an event once entered into the viewport. In order to give better controll to this component, I decided to keep all the thumbnail images squared.



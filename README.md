# React Gallery App

## Seventh Treehouse techdegree project. Unit-07
---
Image gallery app where search images relationated with a _topic_ given by the user or select one of four _predefined searchs_.

Created with [**React js**](https://github.com/reactjs) and consuming [**flickr**](https://www.flickr.com/services/api/) API using [**create_react_app**](https://github.com/facebook/create-react-app), [**react_router**](https://github.com/ReactTraining/react-router) and [**react-intersection-observer**](https://github.com/thebuilder/react-intersection-observer#readme), first look to landing page:
![Landing page](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/landingpage_m2bqgo.png)
At this point can select a link nav of a predefined search as landing page or do a new search:
![search](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/Search_x3xjhb.png)
Given the images you can click to acces to the image viewer and see all images one by one: 
![Image viewer](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/viewer_msh2iv.png)
If the search has no result: 
![No results](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/noResults_it04hq.png)
And if we go to a url that doesn't exist:
![Not found](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/NotFound_y3ilgv.png)
Also has configurated with a loading spinner:
![Loading](https://res.cloudinary.com/da3z5stec/image/upload/v1598274773/React%20Gallery%20App/loading_aphbqn.gif)

The project has been configured to use [netlify](https://www.netlify.com) to deploy a build production of the app and have it in a live link.
> [MikelIam Full Stack Developer](https://mikeliamreactgalleryapp.netlify.app/)

### Style Customization:
---
* Font-family 
    - [Google Fonts Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond?preview.text=May+the+Code+be+with+you&preview.text_type=custom)
    - [Google Fonts Satisfy](https://fonts.google.com/specimen/Satisfy?preview.text=May+the+Code+be+with+you&preview.text_type=custom&sidebar.open=true)
* Title index page style.
* Thumbnail personalization.
* Projects thumbnail animation at index page.
* Links personalization.
* Background image. [Created by rawpixel.com - www.freepik.es](https://www.freepik.es/vectores/fondo)
* Logo at about page and favicon.
* Side-bar and title-bar transparent background.

#### Installation for local use
---
Install the dependencies and start the server.
```sh
$ cd static_node_and_express_site
$ npm install
$ npm start
```

![MikelIam](https://res.cloudinary.com/da3z5stec/image/upload/v1597004412/Portfolio/logo_about_pemkn6.jpg)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

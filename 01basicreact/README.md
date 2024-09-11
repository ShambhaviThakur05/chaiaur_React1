# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify


-------------------------------------MY NOTES--------------------------------------------

We use react-dom in order to use react in browser , and we use react native for mobile dev apps.

// this project is done by only with react 

first command- npx create-react-app 01basicreact
            ~it then creates a react app for you and downloads all teh required dependencies.
            ~it takes time to create the app, it is bulky and downloads some packages which are not required.
            

1- we see what command we want to run by seeing the package.json file the part where the scripts are given
2- In case of vite+react it is given dev so we run command `npm run dev` and in case of simple react projects made using build-react-app we use the command `npm run start`
3- in case of simple react one on first place we used `npx` instead of `npm` we can also use npm. (NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them.)
4- i.e in case of npm we first need to download js packages globally on our system first in order to use them but in case of npx we dont need to download them on our system globally , we can just download them for project purpose only.
5- after we are done with the downloading process we remove unwanted things like vite logo , react logo , app.css and other css file .


PACKAGES-
6- Node modules package is downloaded by using command `npm i`
7- In srs we kept only two files index.js and App.js
8- `gitignore` => what ever `files` that we `dont want to upload on git` are kept here
9- `package-lock.json` => contains all the dependencies and we can locks the version of these dependencies on which the project is running. That the project will run only on these versions of the dependencies.
10- `package.json` => tells us about all the dependencies of the project
11- `README.md` => gives basic introduction about the project. You can tell basic ifo about the project here.
12- `public folder` => inside the public folder we can store `images` and we also have the `index.html` file here. Since we have only one html file and ever js script is loaded through it only that is why we call it single page application.


13- The browser has its on `DOM` (tree like representation of the website) and is the actual dom while react creates its own DOM i.e `Virtual Dom`

14- Inside public>index.html inside the body we only have one empty div with root id.

15- In src>index.js we first create our virtual dom and save it inside a constant root by using command ` const root=React.DOM.createRoot(document.getElementById('root')); `
and then we render this root using command `root.render`.

16- Inside root.render- we use `<React.StrictMode>`  React StrictMode helps to identify and detect various warnings/errors during the development phase(we should use it but not using it also don't cause any problem), inside which we use `<App/>`. this `<App/>` looks like html tage but actually is jsx . In this we can create our own custom tags.

17- We know that we attach ou js file in the html file in order to run it .Now the question arises that we havent loaded the index.js (js file) in the index.html (html file) so how is the script running itself?   
This happens because if we go inside the package.json file in the dependency section we can see the `react-scripts` which helps us to run js from this html file.

18- In case of simple react project you can name a file containing component with .js extension instead of .jsx both are okay. But in case of Vite projects you have to name the file containing component with extension .jsx only and the name of the component in jsx file and name of file should start with upperCase alphabet.Component name and file name can be different and we export and import the component. In case of simple react project you can write the file name in small alphabets. But best practice is to writecomponent name and file name same and in capital.

19- Now the next problem is that in react components of jsx file we can only return one item . So if we try to return various tags from it , it starts giving errors , therefore we should wrap them inside one single tag which can be <div> div tag , but using div tag it adds an extra element to our DOM. Inorder to avoid this situation we use `fragments <>`.

20- `Fragments <>` - Fragments helps us to wrap multiple elements inside a single element without adding an extra tag in the DOM.
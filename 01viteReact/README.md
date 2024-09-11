# React + Vite


---------------------------------------MY NOTES-----------------------------------------

We use react-dom in order to use react in browser , and we use react native for mobile dev apps.
// this project is done by using vite with react 


1- we see what command we want to run by seeing the package.json file the part where the scripts are given
2- In case of vite+react it is given dev so we run command npm run dev and in case of simple react projects made using build-react-app we use the command npm run start
3- in case of simple react one on first place we used npx instead of npm we can also use npm. (NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them.)
4- i.e in case of npm we first need to download js packages globally on our system first in order to use them but in case of npx we dont need to download them on our system globally , we can just download them for project purpose only.
5- after we are done with the downloading process we remove unwanted things like vite logo , react logo , app.css and other css file .

PACKAGES-
6- Node modules package is downloaded by using command `npm i`
7- In srs we kept only two files index.js and App.js
8- `gitignore` => what ever `files` that we `dont want to upload on git` are kept here
9- `package-lock.json` => contains all the dependencies and we can locks the version of these dependencies on which the project is running. That the project will run only on these versions of the dependencies.
10- `package.json` => tells us about all the dependencies of the project
11- `README.md` => gives basic introduction about the project. You can tell basic ifo about the project here.

12- index.html -Since we have only one html file and ever js script is loaded through it only that is why we call it single page application.


~~ Do read the readme file of 01basicreact

13- Inside the `package.json` of `vite` we `dont have react-scripts`in dependencies but it was present in case of simple react project. But here we have directly loaded the js file inside the index.html file unlike the react one.

14- In case of simple react project you can name a file containing component with .js extension instead of .jsx both are okay. But in case of Vite projects you have to name the file containing component with extension .jsx only and the name of the component in jsx file and name of file should start with upperCase alphabet.Component name and file name can be different and we export and import the component.In case of simple react project you can write the file name in small alphabets. But best practice is to writecomponent name and file name same and in capital.

15- Now the next problem is that in react components of jsx file we can only return on item . So if we try to return various tags from it , it starts giving errors , therefore we should wrap them inside one single tag which can be <div> div tag , but using div tag it adds an extra element to our DOM. Inorder to avoid this situation we use `fragments <>`.

16- `Fragments <>` - Fragments helps us to wrap multiple elements inside a single element without adding an extra tag in the DOM.
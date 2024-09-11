import { StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

// all these next things are just for Knowledge and not done practically

//1st way -we can also write component here, but it is not practiced , just for your knowledge we are doing
// you can use it by wriitng <MyApp/> in render part
function MyApp(){
  return(
    <h1>Created my own App Component</h1>
  )
}

//2nd way-can we do it just like we did in customReact by making our own element?
// no we cant because here we are not creating our render fnc ourself and we use render fnc of react so it may take 
//diff arguments etc thats why it dont work and we can create smthing like this using React.createElement 
/*
const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}
*/
//created using react and here anotherElemnt shows how js variables get added
//this just shows how actually things work in the system
/*
const anotherElement="HI"
const reactElement=React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherElement
)
*/ 

//3rd way-just by returning something
/*const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)*/





createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)

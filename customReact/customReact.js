//here we are making the customRender function
function customRender(reactElement,container){
/*
    //creating element and adding its properties
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    //adding it to the container(root)
    container.appendChild(domElement);
*/

    // more nice code

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    for(const prop in reactElement.props){
        if(prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    container.appendChild(domElement);
}


//here we are creating element for our react app
//this is how we want someone to write elements in our react like app
const reactElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root');

//here we are using render fnc that adds our elemensts to our root(DOM)
customRender(reactElement,mainContainer)
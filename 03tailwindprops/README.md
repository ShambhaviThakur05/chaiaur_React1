# React + Vite

--------------------------------------MY NOTES------------------------------------
Vite+Tailwind

- npm create vite@latest
-   cd 03tailwindprops
-   npm i
-   npm install -D tailwindcss postcss autoprefixer(downloads dependencies of tailwind)
-   npx tailwindcss init -p(creates tailwind.config.js)
-   Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
(search content in html and other files)

-    Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;


-    npm run dev


-> Here in this project we are learning how to use tailwind , after doing all the required changes we copy pasted a cards html and tailwind css.
-> `Tailwind is responsive in nature.`
-> At first while pasting the code we recieved an `error` this was due to <img> as img tag is not closed tag , ans in `jsx we only use tags that are closed` , so after closing the `</img>` tag we redsolved the error. The we have attached online address of the picture from pexels website. 
-> After learning this we removed the code. As it was just for demonstration.
-> After that we went to `devui.io` website and copied a card code .

--PROPS--

Why props are used?
=> Suppose you have a card code and  you want to reuse it in multiple places. So, why not we make this card a component and use it again and agian. We are able to reuse a component again and again using props.
`Props help is reusability of code`

-> Basically in general we use all the things like html,css,js individualy but, `REACT helps us to use all these things(html,css,js) together in a single code/component.`

-> So now we made an individual Card component(./components/Card.jsx) and then used it as a component in our App.jsx file.

-> Now Suppose we wants multiple Card Components , so we can write </Card> component multiple time in our App.jsx file , But the problem here arises each card has a person's name and data, multiple cards should have different names and data associated to them.
`THIS IS DONE USING PROPS`.
-> `Props are objects`
-> in props we should put data as objects
-> Next we passes two props directly using {username,btnText} and used them
-> `What if you are working in team and you made the card component and other person uses you component but forgets to pass the props?`

    (FIRST WAY)Then you can use or ( || "Visit me") but it reduces readability
    (SECOND WAY) You directly set a default value when prop is passed in as parameter to teh component.
# React + Vite + Tailwind

npm create vite@latest
cd 04bgChanger
npm i

open tailwind css on broweser and see commands for vite
tailwind css > get started > Framework Guidelines > Vite

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


inside tailwindconfig.js-
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


-> Inside index.css -

@tailwind base;
@tailwind components;
@tailwind utilities;


-> Refresh kr ke hr baar olive aa raha hai kyunki initially olive de rakha hai and sb kuch reset ho jata hai.

-> onClick jo hai vo expect krta hai hum use ek function pass krenge , that why humnse usme arrow fnc bnaya hai . Agr direct function call krte (reference dete function ki) toh jo function return krta vo value onClick mai save ho jati and vo hum nahi chahte hai.
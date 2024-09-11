import Chai from './Chach.jsx'

function App() {
  //we use html in return statement and we can use js like as given below, also it you want to use this js in html use {}, 
  // {name} anyting inside {} is called evaluated expression. It is already evaluated . You cnt write or evaluate anything inside{} , 
  // you have to first evaluate it outside in js part and then write final ans in {}.

  const name = "Shambhavi Thakur";

  return (
    <>
      <h1>Chai aur react with Vite |{name} </h1>
      <Chai/>
    </>
    
  )
}

export default App

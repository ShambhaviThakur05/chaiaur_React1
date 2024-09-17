test

----------------------------------MY NOTES------------------------------------

one impm question arises that in counter add value function what happens if you do this-


let[counter,setCounter] = useState(0);

  const addvalue=()=>{
    if(counter<20){
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
    }
  }


  will it increase 4 times?
  => The ans is no it will only inc by one, this happends due to fibre 
    the value gets update once it gets out of the fnc and since they are together it takes it value of counter same always as 15.

    In order to update it in each go you have to write your code somewhat like this

    
let[counter,setCounter] = useState(0);

  const addvalue=()=>{
    if(counter<20){
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
    }
  }

  here the prevCounter will always take the prev value of the counter , you can name it anything(prevCounter is not fixed)
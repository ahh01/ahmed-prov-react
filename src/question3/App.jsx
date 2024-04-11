// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.
import { useState } from "react";

function useInput(){
  const [input, setInput] = useState("");

  function handleInput(event){
    setInput(event.target.value)
    
  };
  
return {handleInput} 

}

function App() {
  const [handleInput] = useInput()

  return <div>
    <input type="text" onChange={handleInput}/>
    <button>Spara</button>
    </div>;
}

export default App;

  /// Hann inte klart med denna uppgift !
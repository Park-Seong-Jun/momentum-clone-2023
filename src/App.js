// import './App.css';
import { useState, useEffect } from "react";

import Greeting from "./component/greeting";
import Time from "./component/conter/time";
import InputTodos from "./component/conter/inputTodo";
import Todos from "./component/bottom/Todos";

function App() {
  const [userName, setUserName] = useState();

  return (
    <div>
        <section>
            
        </section>
        <main>
            <Time/>
            <InputTodos/>
        </main>
        <section>
            <Todos/>
        </section>
    </div>
    
  );

}
   
    
  
  export default App;
  
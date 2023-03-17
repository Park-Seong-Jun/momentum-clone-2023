
import { useState } from "react";

function Greeting() {
    const [userName, setUserName] = useState("");
    
    function userNameSubmit(event){
      event.preventDefault();
      setUserName(event.target[0].value)
    }
   
    return (
      
      <div>
        <h1>Hello, what's your name?</h1>
        <form onSubmit={userNameSubmit}>
          <input />
        </form>
      </div>
    );
  }
  
  export default Greeting;
  
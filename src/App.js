
import styles from "src/App.module.css"
import { useState, useEffect } from "react";


import Greeting from "./component/greeting";

import Link from "./component/top/link";
import Weather from "./component/top/weather";
import Time from "./component/center/time";
import InputTodos from "./component/center/inputTodo";
import Todos from "./component/bottom/todos";
import Quotes from "./component/bottom/quotes";

function App() {
  const [userName, setUserName] = useState();

  return (
    
    <div className={styles.sections}>
     
        <section className={styles.section}>
          <Link state={userName}/>
          <Weather state={userName}/>
            
        </section>
        <main className={styles.section}>
            <Time state={userName}/>
            <InputTodos state={userName}/>
        </main>
        <section className={styles.section}>
            
            <Quotes state={userName}/>
            <Todos state={userName}/>
        </section>
    </div>
    
  );

}
   
    
  
  export default App;
  
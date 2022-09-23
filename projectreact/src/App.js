import React, {useState} from "react"; 
import Hello from "./sayHello";
import Tweet from "./tweet";

function App() {

  /*first is actual name, second is used to change it*/
  const [isRed, setRe] = useState(false);
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: 'name',
    age: 20,
    posts: ['my first post', 'my lovely summer']
  });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <Tweet name="Oh neato" message="hm"/>
      <Tweet name="what" message="neato"/>
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
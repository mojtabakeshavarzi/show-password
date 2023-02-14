import { FaEye , FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function App() {

  const [type , setType] = useState("password");
  const [icon , setIcons] = useState(FaEyeSlash);

  const clickHandler = () =>
  {
    if(type === "password") 
    {
      setType("text");
      setIcons(FaEye);
    }
    else
    {
      setType("password");
      setIcons(FaEyeSlash);
    }
  }

  return (
    <div className="wrapper">
      <div className="input-fields">
        <span onClick={clickHandler}>{icon}</span>
        <input type={type} />
      </div>
    </div>
  );
}

export default App;

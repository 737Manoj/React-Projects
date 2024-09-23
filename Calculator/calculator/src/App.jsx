import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Button-container";
import Display from "./Display";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;

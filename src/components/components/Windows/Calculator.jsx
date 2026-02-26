import React, { useState } from 'react'
import MacWindow from './MacWindow'
import "./calculator.scss"

const Calculator = ({ windowName, setwindowsState }) => {
  const [input, setinput] = useState("")

  const handlebuttonClick = (value) => {
    setinput((previnput) => previnput + value)
  }

  const handleClear = () => {
    setinput("")
  }

  const handleCalculate = () => {
    try {
      setinput(eval(input).toString())
    } catch (error) {
      console.log(error);
      
      setinput("Error")
    }
  }

  return (
    <MacWindow width='25vw' height='67vh' windowName={windowName} setwindowsState={setwindowsState}>
      <div className="calculator-container">
        <div className="calculator">
          <div className="display">{input || "0"}</div>

<div className="buttons">
  {/* Row 1 */}
  <button onClick={handleClear}>AC</button>
  <button onClick={() => handlebuttonClick("%")}>%</button>
  <button className="operator" onClick={() => handlebuttonClick("/")}>/</button>
  <button onClick={() => handlebuttonClick("")}></button>

  
  <button onClick={() => handlebuttonClick("7")}>7</button>
  <button onClick={() => handlebuttonClick("8")}>8</button>
  <button onClick={() => handlebuttonClick("9")}>9</button>
  <button className="operator" onClick={() => handlebuttonClick("*")}>×</button>

  
  <button onClick={() => handlebuttonClick("4")}>4</button>
  <button onClick={() => handlebuttonClick("5")}>5</button>
  <button onClick={() => handlebuttonClick("6")}>6</button>
  <button className="operator" onClick={() => handlebuttonClick("-")}>−</button>

  
  <button onClick={() => handlebuttonClick("1")}>1</button>
  <button onClick={() => handlebuttonClick("2")}>2</button>
  <button onClick={() => handlebuttonClick("3")}>3</button>
  <button className="operator" onClick={() => handlebuttonClick("+")}>+</button>

  
  <button className="zero" onClick={() => handlebuttonClick("0")}>0</button>
  <button className="operator equal" onClick={handleCalculate}>=</button>
  <button className="operator" onClick={() => handlebuttonClick(".")}>.</button>
</div>

        </div>
      </div>
    </MacWindow>
  )
}

export default Calculator

import Container from "./Container";
import Display from "./Display";
import Buttons from "./Buttons";
import {useState} from 'react';

function App() {

  const [numberEntered, setNumberEntered] = useState(''); // numberEntered is string. Keep track of the number entered

  const [calculatedValue, setCalculatedValue] = useState(0); // keep track of the total

  const [operatorValue, setOperatorValue] = useState(null); // need to keep track of the operator in general

  // numberClicked is the buttonClicked.value on Buttons.js
  function onAppendNumber(numberClicked){
    // need to update numberEntered according to numberClicked
    
    console.log('numberEntered at the beginning', numberEntered);
    console.log('userClicked', numberClicked);
    console.log('numberEntered should be', `${numberEntered}---${numberClicked}`);

    setNumberEntered(`${numberEntered}${numberClicked}`);
  }

  function onClearAll(){ // no parameter as one onlue
    setNumberEntered('');
    setOperatorValue(null);
    setCalculatedValue(0);
  }

  function onClearLast(){
    // we are clearing the number entered that is being entered
    setNumberEntered('');
  }

  function onCalculation(operatorClicked) {
    console.log(operatorClicked)

    if (operatorValue === null) { // if no operator, remember the number entered (start)
      setCalculatedValue(Number(numberEntered)); // set the number entered to the total

      // we used operatorValue as it is the previous operator clicked VS operatorClicked, is the one clicked right now
    } else if (operatorValue === 'Divide') {
      console.log('/');
      setCalculatedValue(calculatedValue / Number(numberEntered));
    } else if (operatorValue === 'Multiply') {
      console.log('*');
      setCalculatedValue(Number(numberEntered) * calculatedValue);
    } else if (operatorValue === 'Add') {
      console.log('+');
      setCalculatedValue(calculatedValue + Number(numberEntered));
    } else if (operatorValue === 'Subtract') {
      setCalculatedValue(calculatedValue - Number(numberEntered));

    }
    setNumberEntered(''); // clear the number entered, so we can start entering a new number for calculation
    setOperatorValue(operatorClicked); // keep track of the operator for next calculation. If lcicked equal: do the calculation, only if click one of the 4 operators afterwards, will do a math
  }

  return (
    <div>
      <Container>
        <h1>React Calculator</h1>
        {/* <div>Number entered: {numberEntered}</div>
        <div>Operator: {operatorValue}</div>
        <div>Number calculated: {calculatedValue}</div> */}
        {/* || not in an "if" - means if the 1st is null/ empty string, shows the second */}
        <Display number={numberEntered || calculatedValue}/>
        {/* changeNumber is a function from the Buttons.js so need to pass another function */}
        <Buttons changeNumber={onAppendNumber} clearAll={onClearAll} clearLast={onClearLast} operatorClicked={onCalculation} />
      </Container>
    </div>
  );
  
}

export default App;

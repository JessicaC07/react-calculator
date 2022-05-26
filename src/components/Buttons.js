import styles from '../styles/buttons.module.css';
import {calculatorButtons} from '../globals/calculator-base-button-data';

function Buttons({changeNumber, clearAll, clearLast, operatorClicked}) {

    // could have called buttonClicked anything we want
    function click(buttonClicked) {
        console.log('clicked', buttonClicked)

        if (buttonClicked.type === 'number') {
            // need to tell App.js which number was clicked
            changeNumber(buttonClicked.value);
        } else if (buttonClicked.text === 'AC') {
            clearAll();
        } else if (buttonClicked.text === 'C') {
            clearLast();
        } else if (buttonClicked.type === 'operator') {
            operatorClicked(buttonClicked.value);
        } else if (buttonClicked.type === 'enter') {
            operatorClicked(buttonClicked.value); // use that functioon as it makes the calculation happen. So when click equal, same as clicking other operators >> will do the calculation
        }
    }

    return(
        <div className={styles.buttons}>
            {/* use map to show all the buttons on the screen */}
            {
                calculatorButtons.map((button, i) => 
                    <button 
                        onClick={() => click(button)} // need the arrow function as we need to know which button
                        //For CSS:
                        className={`${styles[button.className]} ${styles[button.type]}`} 
                        key={i}
                    >
                        {button.text}
                    </button>
                )
            }
        </div>
    )
}

export default Buttons;
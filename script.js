
let number = 0;

const resultEl = document.querySelector(".result")

const updateResult = (value) => {
    resultEl.innerText = value;
}
updateResult(0);

document.querySelector(".wrapper").addEventListener("click", (e) => {
    
    let pressedNumber = e.target.dataset.value;
    
    // if (number === "0" && pressedNumber === "0") {
    //     return;
    // }
   
    // debugger;

    if (pressedNumber != "=") {

        if (number) {
            console.log(`Pressed number: ${pressedNumber} — Number: ${number}`)
            number += pressedNumber ;
        } else if(pressedNumber != 0) {
            console.log(`Pressed number: ${pressedNumber} — Number: ${number}`)
            number = pressedNumber;
        }

    }
    // const calc = document.body.querySelector('.element[data-value="="]')

    if (pressedNumber == "=") {
        console.log(number)
        eval(number)
        number = eval(number) 
    }



    updateResult(number)
}) ;
// when clicked equals update result = eval function???





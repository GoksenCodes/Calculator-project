
let number = 0;

const resultEl = document.querySelector(".result")

const updateResult = (value) => {
    resultEl.innerText = value;
}
updateResult(0);

document.querySelector(".wrapper").addEventListener("click", (e) => {
    
    let pressedNumber = e.target.dataset.value;

    if (pressedNumber != "=") {

        if (number) {
            console.log(`Pressed number: ${pressedNumber} — Number: ${number}`)
            number += pressedNumber ;
        } else if(pressedNumber != 0 && pressedNumber!= ".") {
            console.log(`Pressed number: ${pressedNumber} — Number: ${number}`)
            number = pressedNumber;
        }

    }

    if (pressedNumber == "=") {
        console.log(number)
        eval(number)
        number = eval(number) 
    }


    if (pressedNumber == "c"){
    number = 0 ;

    }

    if (pressedNumber == "%" ){
        let percantage = number/1000 ;
        console.log(percantage)
        number = percantage;
    }

    updateResult(number)
}) ;
// when clicked equals update result = eval function???





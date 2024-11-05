
function outcome() {
    let num1 = Number(document.getElementById("num-one").value); 
    let num2 = Number(document.getElementById("num-two").value);
    let total = 0;

    if (document.getElementById("box1").checked) {
        total = num1 + num2;
    } else if (document.getElementById("box2").checked) {
        total = num1 - num2;
    } else if (document.getElementById("box3").checked) {    
        total = num1 * num2;
    } else if (document.getElementById("box4").checked) {
        if (num2 !== 0) {
            total = num1 / num2;
        } else {
            total = 'Error: Division by zero';
        }
    }
    document.getElementById("resultArea")
    resultArea.innerText = 'Result: ' + total;
    resultArea.classList.add('show');

}
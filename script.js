function changeBackgroundColor() {
    document.body.style.backgroundColor = "light blue"; // Feel free to choose any col
    }
function showAlert() {
    alert("Hello, world!");
    }
    function addNumbers() {
        var num1 = document.getElementById('number1').value;
        var num2 = document.getElementById('number2').value;
        var sum = Number(num1) + Number(num2);
        document.getElementById('result').innerText = "Result: " + sum;
        }
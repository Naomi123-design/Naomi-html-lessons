document.getElementById("Id").innerHTML = "This is using external js to divide 2 numbers"
document.write("<br>")
document.write("Document object modeling is also known as DOM")
function Divide(){
    var num1 = 16
    var num2 = 5
    document.getElementById("Id").innerHTML = num1 - num2
}
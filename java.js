
function Table() {
    document.getElementById('table').innerHTML= ''
    let input = parseInt(document.getElementById('inputNumber').value)
    let start = parseInt(document.getElementById('startingNumber').value)
    let end = parseInt(document.getElementById('endingNumber').value)
    for (let i = start; i<=end; i++)
    document.getElementById('table').innerHTML +=
    input+ " x " + i + " = " +input*i +"<br>"
    
}
// function daynamictablestartendisabove

function Table2() {
    document.getElementById('table').innerHTML= ''
    let number = document.getElementById('input').value
    for (let i = 1; i<11; i++)
    document.getElementById('table').innerHTML+=
    number+ " x "+ i + " = " +number*i + " <br> "}

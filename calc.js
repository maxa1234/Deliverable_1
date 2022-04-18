
function getTableValues() {

    var intRate = parseFloat(document.getElementById("Temperature").value);
    var terms = parseFloat(document.getElementById("RH").value);
    var bal = parseFloat(document.getElementById("DewPoint").value);
    var div = document.getElementById("Result");
    var balVal = bal;
    var intrVal = intRate;
    div.innerHTML += test(bal, intRate, terms);
}

function test(bal, intRate, terms) {

    var trate = intRate / 12;
    var pay = intRate - ((100 - terms)/.5);

 //   if (terms = null) { }
        
    var result =  intRate 
        
    return result;
}
true;
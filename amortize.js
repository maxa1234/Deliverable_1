function getTableValues() {

    var intRate = parseFloat(document.getElementById("interest").value / 100.0);
    var terms = parseFloat(document.getElementById("terms").value * 12);
    var bal = parseFloat(document.getElementById("principal").value);
    var div = document.getElementById("Result");
    var balVal = bal;
    var intrVal = intRate;
    div.innerHTML += test(bal, intRate, terms);
}

function test(bal, intRate, terms) {

    var trate = intRate / 12;
    var pay = bal * (trate / (1 - Math.pow(1 + trate, -terms)));
    var result = "<table>" +
        "<tr><th>Old Balance</th>" +
        "<th>Payments</th>" +
        "<th>Interest</th>" +
        "<th>Principal</th>" +
        "<th>New Balance</th>";

    for (var count = 0; count < terms; ++count) {
        var interest = 0;
        var tprinciple = 0;

        result += "<td> $" + bal.toFixed(2) + " " + "</td>";
        result += "<td> $" + pay.toFixed(2) + "</td>";
        interest = trate * bal;
        result += "<td> $" + interest.toFixed(2) + "</td>";
        tprinciple = pay - interest;
        result += "<td> $" + tprinciple.toFixed(2) + "</td>";
        var newbal = bal - tprinciple;
        result += "<td> $" + newbal.toFixed(2) + "</td>";
        bal = newbal;
        result += "</tr>";

    }
    result += "</table>";
    return result;
}
true;
function addNumbers(textBox1, textBox2) {
    var x = document.getElementById(textBox1).value;
    var y = document.getElementById(textBox2).value;
    var sum = 0;
    sum = Number(x) + Number(y);
    alert("SUM is: " + sum);
    document.getElementById("btnSum").style.backgroundColor='#33FFCA';
}

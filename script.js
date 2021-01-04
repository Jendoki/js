function myFunction() {
    console.log("Hello World!");
}

function typeName() {
    var name = prompt("What is your name?");
    var conf = confirm("Is your name really "+name+" ?")
    if(conf) {
        alert("Hello, " +name+" !");
    }
}

var a = "3";
var b = "5";
var c = a + b;

document.writeln('<p>Type et valeur des variables</p>');
document.writeln('<p>------------------------------</p>');
document.writeln('<p>a : ('+ typeof(a) +') ' + a +'</p>');
document.writeln('<p>a : ('+ typeof(b) +') ' + b +'</p>');
document.writeln('<p>a : ('+ typeof(c) +') ' + c +'</p>');

document.writeln('');
var a = parseInt(a);
var b = parseInt(b);
var c = a + b ;
document.writeln('<p>Type et valeur des variables</p>');
document.writeln('----------------------------');
document.write("<br/>");
document.writeln('a : ('+ typeof(a)  +') ' + a);
document.write("<br/>");
document.writeln('b : ('+ typeof(b)  +') ' + b);
document.write("<br/>");
document.writeln('c : ('+ typeof(c)  +') ' + c);
document.write("<br/>");


function xIsPositive() {
    var x = 3;
    if (x > 0) {
        console.log(x + " est strictement positif.");
    } else if (x < 0) {
        console.log(x + " est strictement négatif.");
    } else {
        console.log(x + " est nul.");
    }
}

xIsPositive();

for(x=0; x<=10; x++) {
    if (x % 2 == 0){
        console.log(x);
    }
}
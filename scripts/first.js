/* jslint devel: true */ 
/* eslint-disable no-console */ 
/* eslint no-undef: "error" */ 
/* eslint-env node */ 
/* eslint-env browser */
function viewCurrDate() { //    eslint-disable-line no-unused-vars        
    document.getElementById('demo').innerHTML = Date(); }

function Check(){
    var x = 10;
    var y = 20;
    var z = x + y;
    var result;
    
    document.getElementById("test1").innerHTML = Date(z);
    
    x = "10";
    y = "20";
    z = x + y;
    
    document.getElementById("test2").innerHTML = Date(z);
    
    x = 10;
    y = 20;
    z = "30";
    result = x + y + z;
    
    document.getElementById("test3").innerHTML = Date(result);
    
    x = "100";
    y = "10";
    z = x / y;
    
    document.getElementById("test4").innerHTML = Date(z);
    
    z = x * y;
    
    document.getElementById("test5").innerHTML = Date(z);
    
    z = x - y;
    
    document.getElementById("test6").innerHTML = Date(z);

    z = x + y;
    
    document.getElementById("test7").innerHTML = Date(z);
}

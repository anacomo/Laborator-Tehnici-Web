window.onload = function(){
    var buton = this.document.getElementById("square-button");
    buton.onclick = function(){
         console.log(1);
            
        ridicarePatrat()
    };
    var buton1 = document.getElementById("half-button");
    buton1.onclick = function(){
        jumatate()
    };
    var buton2 = this.document.getElementById("percent-button");
    buton2.onclick = function(){
        procent()
    };
    var buton3 = document.getElementById("area-button");
    buton3.onclick = function(){
        arieCerc()
    };
    

function ridicarePatrat(){
    let x = document.getElementById("square-input").value;
    document.getElementById("solution").innerHTML += "1. " + x*x + "<br>";
}
function jumatate(){
    let x = document.getElementById("half-input").value;
    document.getElementById("solution").innerHTML += "2. " + x/2 + "<br>";
}
function procent(){
    let x = document.getElementById("percent1-input").value;
    let y = document.getElementById("percent2-input").value;
    document.getElementById("solution").innerHTML += "3. " + x * y/100 + "<br>";
}
function arieCerc(){
    let x = document.getElementById("area-input").value;
    document.getElementById("solution").innerHTML += "4. " + 3.14 * x * x + "<br>"; 
}

}

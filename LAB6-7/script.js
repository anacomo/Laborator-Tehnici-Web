console.log(1);
window.onload = function(){
    // 1
    var body = document.getElementsByTagName("body")[0];
    body.style.fontFamily = "Arial";
    //2
    document.getElementById("nickname").innerHTML = "Ana";
    this.document.getElementById("favorites").innerHTML = "Things";
    this.document.getElementById("hometown").innerHTML = "Bacau";
    //3
    let li = this.document.getElementsByTagName("li");
    for(let i = 0; i < li.length; i++)
        li[i].className = "list-item";
    //4
    var imagine = this.document.createElement("img");
    imagine.setAttribute("src", "1200x625-00-90.jpg");
    this.document.body.appendChild(imagine);
}

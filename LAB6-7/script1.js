var filme = [
    {titlu: "Spider Man",
    durata: 2,
    actori: ["Tom Holland", "Zendaya"],
    vazut : true
    },
    {titlu: "The Notebook", 
    durata: 1,
    actori: ["Ryan Gosling", "I don't care"],
    vazut : false
    }
]
window.onload = function(){
    for(var i = 0; i < filme.length; i++){
        var p = document.createElement("p");
        var node = document.createTextNode(filme[i].titlu);
        p.appendChild(node);
        this.document.body.appendChild(p);
    }

    var p1 = document.getElementsByTagName("p");
    for(var i = 0; i < p1.length; i++){
        var ul = document.createElement("ul");
        p1[i].appendChild(ul);
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = "durata: " + filme[i].durata;
        var li = this.document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = "actori: " + filme[i].actori[0];
        if(vazut == true)
    }
        
}

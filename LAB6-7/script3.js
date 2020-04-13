window.onload = function(){
    var buton = document.getElementById("story-button");
    buton.onclick = function(){makeStory();}
}
    function makeStory(){
        var loc = document.getElementsByTagName("input")[0].value;
        var adj = document.getElementsByTagName("input")[1].value;
        var nume = document.getElementsByTagName("input")[2].value;
        var story = nume + " a vizitat " + adj + " " + loc + ".";
        var tagStory = document.getElementById("story");
        tagStory.innerHTML = story;
    }

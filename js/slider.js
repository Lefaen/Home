var labels = document.getElementsByClassName("controls");
var timeId;
var timeId2;
var delay = 3 * 1000;
var n = 1;

function showSlide(n){
    var label = document.getElementById("checked");
    var img = document.getElementById("slideImage");
    label.removeAttribute("id");
    
    var result, i, elm;
    
    for(i = 0; i<labels.length; i++){
        elm = labels[i];
        if(elm.getAttribute("for") == "slide" + n.toString()){
            result = elm;
        }
    }
    result.setAttribute("id", "checked");
    img.setAttribute("src", "/images/slider/slide" + n.toString() + ".jpg");
};

window.onload = function () {
    timeId2 = setInterval(function () {
        autoSlide(1)
    }, delay);
};

function autoSlide(n)
{
    showSlide(n)
    clearInterval(timeId2);
    clearInterval(timeId);
    timeId = setInterval(function () {
        n = n + 1;
        if (n > 6) {
            n = 1;
        }
        showSlide(n);
        console.log(n);
    }, delay); 
}
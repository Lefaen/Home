var labels = document.getElementsByClassName("controls");
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
    autoSlide(1);
    setInterval(function () {
        var i = 1;

        autoSlide(i);
    }, 3*1000*labels.length);

};


function autoSlide(i)
{
    for(var i; i<7; i++) {
        (function (i) {
            setTimeout(function () {
                showSlide(i);
                console.log(i);
            }, 3*1000 * i);
        })(i);
    }
}
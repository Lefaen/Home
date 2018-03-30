function showSlide(n){
    var label = document.getElementById("checked");
    var img = document.getElementById("slideImage");
    label.removeAttribute("id");
    var labels = document.getElementsByClassName("controls");
    
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
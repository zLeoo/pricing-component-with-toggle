function toggle(){
    var element = document.getElementsByClassName('toggle-button');
    for(i = 0; i < element.length; i++){
        if(!element[i].classList.toggle("active")){
            document.getElementsByClassName("price")[0].innerHTML = "199.99";
            document.getElementsByClassName("price")[1].innerHTML = "249.99";
            document.getElementsByClassName("price")[2].innerHTML = "399.99";
        }else{
            document.getElementsByClassName("price")[0].innerHTML = "19.99";
            document.getElementsByClassName("price")[1].innerHTML = "29.99";
            document.getElementsByClassName("price")[2].innerHTML = "39.99";
        }
        
    }
    
    
}

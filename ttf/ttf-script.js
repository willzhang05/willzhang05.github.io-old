var n=0;

function redirect(){
    if (event.type == "keydown"){
        if (event.keyCode == '39'){
            alert(event.keyCode);
            n+=1;
            if (n>0){
                setTimeout(window.location.replace("slide" + n + ".html"),500);
                document.title = "Slide " + n;
            }
        
        } else if (event.keyCode == '37'){
            alert(event.keyCode);
            n-=1;
            if (n<=0){
                setTimeout(window.location.replace("TTF_presentation.html"),500);
                
            } else {
                setTimeout(window.location.replace("slide" + n + ".html"),500);
                document.title = "Slide " + n;
            }
        }
    }
}














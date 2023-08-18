var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){

    document.querySelectorAll("button")[i].addEventListener("click",handleClick);

    function handleClick(){
        alert("I got clicked ")
    }
}


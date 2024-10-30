secret.addEventListener("click",function(){
    alert("hollowen is tomorrow");
})
//when presse the light on button show the lingt on
light_on.addEventListener("click", function(){
    console.log("light turn on");
    document.getElementById("lightbulb").src="lightbulb_on.webp";
    document.getElementById("light_on").style.display="none";
    document.getElementById("light_off").style.display="initial";
    //apply light to the webpage
    document.body.classList.toggle("light");
})




//when presse the light off button show the lingt off
light_off.addEventListener("click", function(){
    console.log("light turn off");
    document.getElementById("lightbulb").src="lightbulb_off.webp";
    document.getElementById("light_on").style.display="initial";
    document.getElementById("light_off").style.display="none";
    //apply dark to the webpage
       document.body.classList.toggle("light");
})
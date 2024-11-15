const color = document.querySelectorAll(".color-block")
const body = document.querySelector("body")

color.forEach(function (color) {
    color.addEventListener("click", function(c){
        if (c.target.id==="red") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="green") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="blue") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="grey") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="purple") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="yellow") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="darkblue") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="silver") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="orange") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="tomato") {
            body.style.backgroundColor=c.target.id;
        }
        if (c.target.id==="cyan") {
            body.style.backgroundColor=c.target.id;
        }
    
    })
   
    
})
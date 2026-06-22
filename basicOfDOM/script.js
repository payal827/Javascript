let y = document.getElementById("ele");
y.addEventListener("mouseenter",function(){
    y.style.color = "yellow";
    y.style.backgroundColor = "red";
});

y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
});



let x = document.getElementById("ele2");
x.addEventListener("mousemove",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});


let z = document.getElementById("payal");
z.addEventListener("mousemove",function(){
    z.innerHTML = "PAYAL GADAGE"
});



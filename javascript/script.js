let p = document.querySelector("p");

p.addEventListener("click", function() {
    p.style.color="yellow"
});


let inp = document.querySelector("input");

inp.addEventListener("input", function (dets) {
    if(dets.data !== null) {
        console.log(dets.data);
    }
});

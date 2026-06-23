// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     p.style.color="yellow"
// });


// let inp = document.querySelector("input");

// inp.addEventListener("input", function (dets) {
//     if(dets.data !== null) {
//         console.log(dets.data);
//     }
// });


//input selction

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(dets) {
//     device.textContent = `${dets.target.value} Device selected`;
// });


let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");
form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);    
    
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value

     let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value

     let p = document.createElement("p");
    p.textContent = inputs[3].value

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function (inp) {
        if(inp.type != "submit")
            inp.value =""
        
    });



});
// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is coming";
// }

// const element = document.getElementById("first");
// // element.onclick = function handleClick(){
// //     element.textContent = "Strike is coming";

// // }

// element.addEventListener('dblclick',()=>{
//     element.textContent = "Strike is coming";
    
// })

// element.addEventListener('click',()=>{
//     element.style.color = "pink";
    
// })


// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click', ()=>{
//         child.textContent = "I am Clicked";
//     })
// }



const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("Grandparent is clicked");
});

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent is clicked");
});
const child = document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("Child is clicked");
});


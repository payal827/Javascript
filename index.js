// // function
// function greeting() {
//     console.log("Hello JS")
// }
// //calling function
// greeting();

//     const sum = a + b;
//     console.log(sum);
// }
// add(10,30);

//rest operator //in this ... insert given argument into array
// function add(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n
//     }
//     console.log(sum)

// }

//  add(10,30,40,50);


//fun expression
// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

//arrow fun
// const add = (a,b)=> a+b;
// console.log(add(10,30));


//callback use cases

function greet(){
    console.log("Hello jS");
}
function dance(){
    console.log("I am dancing");
}
function meet(callback){
    console.log("I am going");
    callback();
    console.log("I have finished meeting");
}
meet(greet);
meet(dance);
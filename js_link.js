
// const newElement = document.createElement("h2");
// newElement.textContent = "Strike is coming";
// newElement.id = "second";

// //select elemrnt
// const element = document.getElementById("first");
// element.after(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Payal";
// newElement.id = "third";
// newElement2.className = "pa";

// newElement2.style.backgroundColor = "pink";
// newElement2.style.fontSize = "50px";

// element.before(newElement2);

// console.log(newElement2.getAttribute("class"));


// const list = document.createElement("li");
// list.textContent = "Milk"
// const list2 = document.createElement("li");
// list2.textContent = "Cake"
// const unoderElement = document.getElementById("listing")

// unoderElement.append(list);
// unoderElement.append(list2);



const arr = ["Milk","Paneer","Cake","Tea"];

const unoderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list)

    
}
unoderElement.append(fragment);
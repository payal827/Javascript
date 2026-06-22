let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/05/3f/50/053f50fe48cbc691148b89906c37ddb1.jpg","https://i.pinimg.com/736x/28/aa/5f/28aa5fc7e037c6f56f3c6ed5f33b7814.jpg", "https://i.pinimg.com/736x/5f/ad/f5/5fadf5778089e515ce84cb195a13f995.jpg", "https://i.pinimg.com/736x/7c/3e/fb/7c3efbfeea61505167b89cac5640a3c3.jpg" , "https://i.pinimg.com/1200x/a3/d4/aa/a3d4aa05160b71850783e8490edc4529.jpg"];

let s = "";
for(let i=1;i<=52;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card">
            <img src=${arr[r]}>
        </div>`;
}
main.innerHTML = s;
let h1E1 = document.querySelector("h1")
h1E1.textContent = "some text"

let button1 = document.querySelector("#hidebtn")
button1.addEventListener ('click', ()=>{
    h1E1.style.display = "none"
})
let button2 = document.querySelector("#unhidebtn")
button2.addEventListener ('click', ()=>{
    h1E1.style.display = "block"
})

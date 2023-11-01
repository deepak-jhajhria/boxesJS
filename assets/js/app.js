const firstBox = document.querySelector(".firstBox");
firstBox.addEventListener(("click"),function(){
    firstBox.classList.add("d-none")
    alert("This box are removed !");
});
const secondBox = document.querySelector(".secondBox");
secondBox.addEventListener(("click"),function(){
    secondBox.classList.add("d-none")
    alert("This box are removed !");
});

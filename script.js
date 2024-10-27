const inputbox = document.querySelector("#input-box");
const inputbtn = document.querySelector(".row button");
const list = document.querySelector("#list-container")

console.log(inputbox);


function addTask(){
    if (inputbox.value == ''){
        alert("You must write something.")
    }
    else {
        let li =  document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData()

}


list.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function loadData(){
    if (localStorage.getItem("data")){
        list.innerHTML = localStorage.getItem("data")
        }
    }
    loadData();


inputbtn.addEventListener("click", () => {
    addTask();
}
)
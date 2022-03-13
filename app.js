let popUpBtn = document.querySelector("div.main-head button.add-popup");
let modal = document.querySelector("div.modal-container");
let inputTitle = document.querySelector("div.modal-body input.input-title");
let inputDes = document.querySelector("div.modal-body input.input-desc");
let inputDate = document.querySelector("div.modal-body input.input-date");
let addBtn = document.querySelector("div.modal-button button");
let tbody = document.querySelector("table tbody");
let doneBtn = document.querySelector("td.done");
let darkmodeBtn = document.querySelector("aside ul li.darkmode");
let ul = document.querySelector("ul");
let icon1 = document.querySelector("i.fa-shield-alt");
let icon2 = document.querySelector("i.fa-clipboard-list");
let icon3 = document.querySelector("i.fa-sun");
let mainHead = document.querySelector("h2.main-header");
let table = document.querySelector("table");
let image = document.querySelector("img");
let h1Logo = document.querySelector("div.logo h1");
let unfinished = document.getElementById("unfinished");
let allTasks = document.getElementById("allTasks");

function openModal() {
    modal.classList.add("show-modal");

}
function addToDo() {
    if (inputTitle.value.trim() && inputDes.value.trim() && inputDate.value.trim() != "") {
        modal.classList.remove("show-modal");
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        let tdDes = document.createElement("td");
        let tdDate = document.createElement("td");
        let tdStatus = document.createElement("td");
        tdTitle.textContent = inputTitle.value.trim();
        tdDes.textContent = inputDes.value.trim();
        tdDate.textContent = inputDate.value.trim();
        tdStatus.textContent = "Mark Done";
        tbody.appendChild(tr)
        tr.appendChild(tdTitle);
        tr.appendChild(tdDes);
        tr.appendChild(tdDate);
        tr.appendChild(tdStatus);
        tdDate.classList.add("date-tr");
        tdStatus.classList.add("done");
        btns = document.querySelectorAll("td.done");
        for (let btn of btns) {
            btn.addEventListener("click", markDone);
        }
        inputTitle.value = "";
        inputDes.value = "";
        inputDate.value = "";

        inputTitle.focus();
    }
    else {
        alert("You Must Fill the inputs")
    }

}

function addToDoEnter(e) {
    if (e.which == 13 && inputTitle.value.trim() && inputDes.value.trim() && inputDate.value.trim() != "") {
        modal.classList.remove("show-modal");
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        let tdDes = document.createElement("td");
        let tdDate = document.createElement("td");
        let tdStatus = document.createElement("td");
        tdTitle.textContent = inputTitle.value.trim();
        tdDes.textContent = inputDes.value.trim();
        tdDate.textContent = inputDate.value.trim();
        tdStatus.textContent = "Mark Done"
        tbody.appendChild(tr)
        tr.appendChild(tdTitle);
        tr.appendChild(tdDes);
        tr.appendChild(tdDate);
        tr.appendChild(tdStatus);
        tdDate.classList.add("date-tr");
        tdStatus.classList.add("done");
        btns = document.querySelectorAll("td.done");
        for (let btn of btns) {
            btn.addEventListener("click", markDone);
        }
        inputTitle.value = "";
        inputDes.value = "";
        inputDate.value = "";

        inputTitle.focus();

    }
}

function markDone() {
    let doneJob = this.parentElement;
    doneJob.classList.toggle("green");
}

function darkmode() {
    document.body.classList.toggle("body-darkmode");
    ul.classList.toggle("ul-darkmode");
    icon1.classList.toggle("i-darkmode");
    icon2.classList.toggle("i-darkmode");
    icon3.classList.toggle("i-darkmode");
    mainHead.classList.toggle("h-darkmode");
    table.classList.toggle("table-darkmode");
    h1Logo.classList.toggle("h1-darkmode");
}

function filterUnfinished() {
    let allTr = tbody.querySelectorAll("tr");
    for (let tr of allTr) {
        if (tr.classList.contains("green")) {
           
        }
        else {
            tr.classList.add("warn");
        }

    }
}

function showAll() {
    let allTr = tbody.querySelectorAll("tr");
    for (let tr of allTr) {
        if (tr.classList.contains("green")) {
            tr.classList.remove("green");
        }
        if (tr.classList.contains("warn")) {
            tr.classList.remove("warn");
        }


    }
}

popUpBtn.addEventListener("click", openModal);
addBtn.addEventListener("click", addToDo);
inputTitle.addEventListener("keyup", addToDoEnter);
inputDes.addEventListener("keyup", addToDoEnter);
inputDate.addEventListener("keyup", addToDoEnter);
darkmodeBtn.addEventListener("click", darkmode);
unfinished.addEventListener("click", filterUnfinished);
allTasks.addEventListener("click", showAll)
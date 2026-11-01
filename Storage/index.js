
const save = document.querySelector("#save");
const load = document.querySelector("#load");
const names = document.querySelector("#name");

function saveData() {
    const name = names.value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("username", name);

    alert("Name saved successfully!");
}

save.addEventListener("click", saveData);

function loadData() {
    const name = localStorage.getItem("username");

    if (name === null) {
        alert("No name found!");
    } else {
        alert("Stored name: " + name);
    }
}

load.addEventListener("click", loadData);

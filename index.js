import { initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const appSettings = {
    databaseURL : "https://playground-b96f3-default-rtdb.firebaseio.com/"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
 
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    console.log(`${inputValue} added to database`)
})
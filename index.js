const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounterE1 = document.getElementById("remaining-counter");

textareaE1.addEventListener("keyup", () => { 
    updateCounter()
 })

function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length;
   
    remainingCounterE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;

// or we can write the same line like this because our max-length in the textarea is 50 character..

// remainingCounterE1.innerText = 50 - textareaE1.value.length;

}
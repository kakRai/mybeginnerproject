const textAreaEl = document.getElementById("textarea"),
	  totalCounterEl = document.getElementById("total-counter"),
	  remainCounterEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", ()=>{
	updateCounter()
})

updateCounter();

function updateCounter() {
	totalCounterEl.innerText = textAreaEl.value.length;
	remainCounterEl.innerText = textAreaEl.getAttribute("maxLength") - 
	textAreaEl.value.length;
}
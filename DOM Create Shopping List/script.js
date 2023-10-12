var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var xButton = document.createElement("button")
	xButton.classList.add("x")
	xButton.appendChild(document.createTextNode("X"))
	li.appendChild(document.createTextNode(input.value))
	li.appendChild(xButton);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var list = document.querySelector('ul'); // Assuming your <ul> element is a common ancestor


list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
    console.log('Element clicked:', event.target);
  }
});

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
});







//declarations
let container = document.querySelector(".container");
const paragraph = document.createElement("p");
const header = document.createElement("h3");
const div = document.createElement("div");
const insiderHeader = document.createElement("h1");
const insiderParagraph = document.createElement("p");


//working with the elements
paragraph.textContent = "Hey I am red!";
paragraph.style.color = "red";

header.textContent = "I'm a blue h3!";
header.style.color = "blue";

div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

insiderHeader.textContent = "I'm in a div";
insiderParagraph.textContent = "ME TOO!";

//appending the elements
div.appendChild(insiderHeader);
div.appendChild(insiderParagraph);
container.appendChild(div);
container.appendChild(paragraph);
container.appendChild(header);

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.style.background = "green";
    button.style.color = "white";
    button.addEventListener("click", () => {
        alert(button.id);
    });
});




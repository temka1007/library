const addBookBtn = document.querySelector(".add-book");
const updateBtn = document.querySelector(".update");
const removeBtn = document.querySelector(".remove");

let myLibrary = [];

addBookBtn.addEventListener("click", () => {
    
})

const createBtn = document.querySelector(".create")
const inputAuthorName = document.querySelector("#author")
const container = document.querySelector(".books div")

createBtn.addEventListener("click", () => {
    const value = inputAuthorName.value;
    const nameField = document.querySelector(".author")
    nameField.remove();
    const author = document.createElement("div")
    author.textContent = `by ${value}`
    author.classList.add("author")
    container.appendChild(author)
    event.preventDefault();
})

function book(name) {
    this.name = name
}

const value = inputAuthorName.value;
const books = new book(value)

console.log(books)


function addBookToLibrary(object) {
    return myLibrary.push(object)
}

addBookToLibrary(books)

console.log(myLibrary)

function display(thing){
    console.log(thing)
}

display(myLibrary[0])
/* eslint-disable no-restricted-globals */
const addBookBtn = document.querySelector("[data-add-book-button]");
const books = document.querySelector(".books");

const create = document.querySelector(".create");
const cancelBtn = document.querySelector("[data-cancel-button]");
const overlay = document.querySelector("#overlay");

const bookName = document.querySelector("#book_name");
const authorName = document.querySelector("#author");
const readPage = document.querySelector("#read_page");
const page = document.querySelector("#page_number");

const myLibrary = [];

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

addBookBtn.addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  openPopup(popup);
  event.preventDefault();
});

cancelBtn.addEventListener("click", () => {
  const popup = cancelBtn.closest(".popup");
  closePopup(popup);
  event.preventDefault();
});

function BookInformation(name, author, leftPage, pageNumber) {
  this.name = name;
  this.author = author;
  this.readPage = Math.floor(leftPage);
  this.page = Math.floor(pageNumber);
}

function addBookToMyLibrary() {
  const book = document.createElement("div");
  const nth = myLibrary.length;
  // name and author
  const name = document.createElement("div");
  const author = document.createElement("div");

  if (myLibrary[nth - 1].name == "") {
    name.textContent = "Unknown";
  } else {
    name.textContent = myLibrary[nth - 1].name;
  }
  if (myLibrary[nth - 1].author == "") {
    author.textContent = "by Unknown";
  } else {
    author.textContent = `by ${myLibrary[nth - 1].author}`;
  }
  name.classList.add("book-name");
  author.classList.add("author");

  // progress
  const progressDiv = document.createElement("div");
  const form = document.createElement("form");
  const progress = document.createElement("progress");
  const progressIndicator = document.createElement("div");

  progress.setAttribute("value", myLibrary[nth - 1].readPage);
  progress.setAttribute("max", myLibrary[nth - 1].page);
  if (myLibrary[nth - 1].readPage > myLibrary[nth - 1].page) {
    progressIndicator.textContent = "Error";
  } else {
    progressIndicator.textContent = `${myLibrary[nth - 1].readPage}/${
      myLibrary[nth - 1].page
    }`;
  }

  // button
  const btnContainer = document.createElement("div");
  const updateBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  btnContainer.classList.add("button");
  updateBtn.classList.add("update");
  updateBtn.textContent = "Update";
  removeBtn.classList.add("remove");
  removeBtn.textContent = "Remove";

  book.appendChild(name);
  book.appendChild(author);
  book.appendChild(progressDiv);
  book.appendChild(btnContainer);
  progressDiv.appendChild(form);
  form.appendChild(progress);
  form.appendChild(progressIndicator);
  btnContainer.appendChild(updateBtn);
  btnContainer.appendChild(removeBtn);
  books.appendChild(book);
}

function inputCleaner() {
  bookName.value = "";
  authorName.value = "";
  readPage.value = "";
  page.value = "";
  const popup = cancelBtn.closest(".popup");
  closePopup(popup);
  event.preventDefault();
}

create.addEventListener("click", () => {
  const newBook = new BookInformation(
    bookName.value,
    authorName.value,
    readPage.value,
    page.value
  );
  myLibrary.push(newBook);
  inputCleaner();
  console.log(myLibrary);
  addBookToMyLibrary();
  event.preventDefault();
});

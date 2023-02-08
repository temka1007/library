/* eslint-disable no-restricted-globals */
const addBookBtn = document.querySelector("[data-add-book-button]");
const updateBtn = document.querySelector(".update");
const books = document.querySelector(".books");

const create = document.querySelector(".create");
const cancelBtn = document.querySelector("[data-cancel-button]");
const overlay = document.querySelector("#overlay");

const bookName = document.querySelector("#book_name");
const authorName = document.querySelector("#author");
const readPage = document.querySelector("#read_page");
const page = document.querySelector("#page_number");

let mylibrary = [];

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

function book(name, author, leftPage, pageNumber) {
  this.name = name;
  this.author = author;
  this.readPage = leftPage;
  this.page = pageNumber;
}

function addBookToMyLibrary() {
  const book = document.createElement("div");
  books.appendChild(book);
}

create.addEventListener("click", () => {
  const newBook = new book(
    bookName.value,
    authorName.value,
    readPage.value,
    page.value
  );
  mylibrary.push(newBook);

  bookName.value = "";
  authorName.value = "";
  readPage.value = "";
  page.value = "";

  console.log(mylibrary);
  addBookToMyLibrary();
  const popup = cancelBtn.closest(".popup");
  closePopup(popup);
  event.preventDefault();
});

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

const myLibrary = [
  {
    name: "Pragmatism",
    author: "William James",
    readPage: 40,
    page: 152,
    created: false,
  },
  {
    name: "Philosophical Writings of Peirce",
    author: "Charles S. Peirce",
    readPage: 400,
    page: 416,
    created: false,
  },
  {
    name: "From a Logical Point of View",
    author: "Willard Van Orman Quine",
    readPage: 200,
    page: 200,
    created: false,
  },
  {
    name: "Reconstruction in Philosophy",
    author: "John Dewey",
    readPage: 50,
    page: 238,
    created: false,
  },
];

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
  this.created = false;
}

function arrayLoop(array) {
  for (let i = 0; i < [array.length]; i += 1) {
    if (array[i].created === false) {
      const book = document.createElement("div");
      // name and author
      const nameDiv = document.createElement("div");
      const authorDiv = document.createElement("div");

      if (myLibrary[i].name === "") {
        nameDiv.textContent = "Unknown";
      } else {
        nameDiv.textContent = array[i].name;
      }
      if (myLibrary[i].author === "") {
        authorDiv.textContent = "by Unknown";
      } else {
        authorDiv.textContent = `by ${array[i].author}`;
      }
      nameDiv.classList.add("book-name");
      authorDiv.classList.add("author");

      // progress
      const progressDiv = document.createElement("div");
      const form = document.createElement("form");
      const progress = document.createElement("progress");
      const progressIndicator = document.createElement("div");
      progressIndicator.classList.add("progressIndicator")

      progress.setAttribute("value", Math.floor(array[i].readPage));
      progress.setAttribute("max", Math.floor(array[i].page));
      if (Math.floor(array[i].readPage) > Math.floor(array[i].page)) {
        progressIndicator.textContent = "Error";
      } else {
        progressIndicator.textContent = `${Math.floor(
          array[i].readPage
        )} / ${Math.floor(array[i].page)}`;
      }

      // button
      const btnContainer = document.createElement("div");
      const removeBtn = document.createElement("button");

      btnContainer.classList.add("button");
      removeBtn.classList.add("remove");
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener("click", () => {
        book.remove();
        array.splice(i, i + 1);
      });

      book.appendChild(nameDiv);
      book.appendChild(authorDiv);
      book.appendChild(progressDiv);
      book.appendChild(btnContainer);
      progressDiv.appendChild(form);
      form.appendChild(progress);
      form.appendChild(progressIndicator);
      btnContainer.appendChild(removeBtn);
      books.appendChild(book);
    }
    // eslint-disable-next-line no-param-reassign
    array[i].created = true;
  }
}

arrayLoop(myLibrary);

function cleaner() {
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
  arrayLoop(myLibrary);
  cleaner()
  event.preventDefault();
});

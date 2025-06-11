const myLibrary = [];
const booksList = document.querySelector("#books_list");
const addBook = document.querySelector("#add_book");
const bookTitle = document.querySelector("#book_title");
const author = document.querySelector("#author");
const numberOfPage = document.querySelector("#numberOfPage");
const readYes = document.getElementById("readYes");
const readNo = document.getElementById("readNo");
/**
 * Book Constructor
 */
function Book(title, author, numberOfPage, beenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPage = numberOfPage;
  this.beenRead = beenRead;
  this.id = crypto.randomUUID();
}
/**
 * Take params, create a book then store it in the array
 * */
function addBookToLibrary(title, author, numberOfPage, beenRead) {
  const newBook = new Book(title, author, numberOfPage, beenRead);
  myLibrary.push(newBook);
}

/**
 * Display the library
 */
function showBookList() {
  booksList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    console.log(book.title);
    let newBook = document.createElement("tr");

    let TitleCell = document.createElement("td");
    TitleCell.textContent = book.title;

    let AuthorCell = document.createElement("td");
    AuthorCell.textContent = book.author;

    let NumberOfPageCell = document.createElement("td");
    NumberOfPageCell.textContent = book.numberOfPage;

    let beenReadCell = document.createElement("td");
    beenReadCell.textContent = book.beenRead;

    // Remove Button
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBook(book.id);
    });
    removeCell.appendChild(removeButton);

    newBook.appendChild(TitleCell);
    newBook.appendChild(AuthorCell);
    newBook.appendChild(NumberOfPageCell);
    newBook.appendChild(beenReadCell);
    newBook.appendChild(removeCell);

    booksList.appendChild(newBook);
  }
}
/**
 * Add new book from user input
 */
addBook.addEventListener("click", function () {
  const beenRead = readYes.checked ? "Yes" : "No";
  console.log(beenRead);
  addBookToLibrary(bookTitle.value, author.value, numberOfPage.value, beenRead);
  console.log(`Added ${bookTitle.value} to the library.`);
  console.log(myLibrary);
  showBookList();
});
/**
 * Remove Book
 */
function removeBook(bookId) {
  const index = myLibrary.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    showBookList();
  }
}

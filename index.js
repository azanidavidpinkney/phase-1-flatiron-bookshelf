//Global variables
const bookURL = "http://localhost:3000/books";
const ulContainer = document.querySelector("#book-nav");
const bookForm = document.querySelector("#book-form");
const bookModal = document.querySelector("#mainForm");
//Book's details
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookGenre = document.querySelector("#book-genre");
const bookImg = document.querySelector("#book-cover");
const bookYearPublished = document.querySelector("#book-year-published");
const bookPage = document.querySelector("#book-page-count");
const bookDescription = document.querySelector("#book-description");
const bookPublisher = document.querySelector("#book-publisher");
const bookIsbn = document.querySelector("#book-isbn");

//Helper functions

//Display book's details
const displayBookDetails = book => {
  bookTitle.innerHTML = `<b>Title:</b> ${book.title}`;
  bookAuthor.innerHTML = `<b>Author:</b> ${book.author}`;
  bookGenre.innerHTML = `<b>Genre:</b> ${book.genre}`;
  bookImg.src = book.coverImage;
  bookImg.alt = book.title;
  bookYearPublished.innerHTML = `<b>Release Year:</b> ${book.yearPublished}`;
  bookPage.innerHTML = `<b>Number of Pages:</b> ${book.pageCount}`;
  bookDescription.innerHTML = `<b>Description:</b> ${book.description}`;
  bookPublisher.innerHTML = `<b>Publisher:</b> ${book.publisher}`;
  bookIsbn.innerHTML = `<b>ISBN:</b> ${book.ISBN}`;
};

//Append book
const appendBook = book => {
  const list = document.createElement("li");
  list.textContent = book.title;
  list.addEventListener("click", () => displayBookDetails(book)); //Click any book title to replace current movie's details
  ulContainer.append(list);
};

//GET request to the following endpoint to retrieve the book data
const fetchData = () => {
  fetch(bookURL)
    .then(res => res.json())
    .then(bookArray => {
      ulContainer.innerHTML = ""; //Remove the placeholder lists
      displayBookDetails(bookArray[0]); //First Movie
      bookArray.forEach(appendBook);
    });
};
fetchData();

//Form to add a book
const addBookToForm = e => {
  //Prevent the page from refreshing
  e.preventDefault();

  //Target HTML inputs' id's names from the form
  const inputTitle = e.target["new-title"].value;
  const inputName = e.target["new-name"].value;
  const inputGenre = e.target["new-genre"].value;
  const inputImage = e.target["new-image"].value;
  const inputPublishedYear = e.target["new-published-year"].value;
  const inputPageNumber = e.target["new-page-count"].value;
  const inputDescription = e.target["new-description"].value;
  const inputPublisher = e.target["new-publisher"].value;
  const inputIsbn = e.target["new-isbn"].value;

  const newBook = {
    title: inputTitle,
    author: inputName,
    genre: inputGenre,
    coverImage: inputImage,
    yearPublished: inputPublishedYear,
    pageCount: inputPageNumber,
    description: inputDescription,
    publisher: inputPublisher,
    ISBN: inputIsbn,
  };

  //Invoke the function to get new book
  displayBookDetails(newBook);
  //Reset the form
  e.target.reset();
};
//Invoke the function when the form is submitted
bookForm.addEventListener("submit", addBookToForm);

//For the modal
//To open the modal
function openForm() {
  bookModal.style.display = "block";
}

//To close the modal
function closeForm() {
  bookModal.style.display = "none";
}

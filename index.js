//Global variables
const bookURL = "http://localhost:3000/books";
const ulContainer = document.querySelector("#book-nav");
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
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookGenre.textContent = `Genre: ${book.genre}`;
  bookImg.src = book.coverImage;
  bookImg.alt = book.title;
  bookYearPublished.textContent = `Release Year: ${book.yearPublished}`;
  bookPage.textContent = `Number of Pages: ${book.pageCount}`;
  bookDescription.textContent = `Description: ${book.description}`;
  bookPublisher.textContent = `Publisher: ${book.publisher}`;
  bookIsbn.textContent = `ISBN: ${book.ISBN}`;
};

//Append book
const appendBook = book => {
  const list = document.createElement("li");
  list.textContent = book.title;
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

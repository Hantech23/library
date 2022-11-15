let library = [];

function Book (title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(Book) {
    library.push(Book)
}

const bookShelf = document.querySelector('.book-shelf');


function display() {
    for (let eachBook of library) {
        createBookCard(eachBook)
    }
}
display();

function findBook(title) {

}

function createBookCard(Book) {
    const bookCard = document.createElement('div')
    const removeBtn = document.createElement('span')
    const title = document.createElement('p')
    const author = document.createElement('p')
    
    bookCard.classList.add('book-card')
    removeBtn.classList.add('removeBtn')

    removeBtn.textContent = "x";
    removeBtn.onclick = function() {
        console.log('remove button activated')
        const index = library.indexOf(Book)
        library.splice(index, 1)
        updateBookShelf()
    }
    title.textContent = Book.title;
    author.textContent = Book.author;


    bookCard.append(removeBtn)
    bookCard.append(title)
    bookCard.append(author)
    bookShelf.append(bookCard)
}

const modalBtn = document.getElementById("addBookBtn")

modalBtn.onclick = function() {
    console.log('yo modal button has been clicked')
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
}

window.onclick = function(event) {
    if (document.querySelector(".overlay").contains(event.target)) {
        closeModal()
    }
}
function closeModal() {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
}

const addBookForm = document.getElementById("addBookForm")

function getBookFromForm() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    return new Book(title, author);
}

document.getElementById("submit").onclick = function(event) {
    event.preventDefault()
    const newBook = getBookFromForm()
    addBookToLibrary(newBook)
    updateBookShelf()
    closeModal()
}

const updateBookShelf = () => {
    resetBooksGrid()
    display()
}
  
const resetBooksGrid = () => {
    bookShelf.innerHTML = ''
}
/*
document.querySelector('.removeBtn').onclick = function() {
    console.log("remove button activated")
}

function removeBook() {
    const title = removeBtn.parentNode.firstChild
}

document.getElementById("submit").onclick = function() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");

    console.log(title.value + " " + author.value);
}
*/
let library = [];

const book1 = new Book('Heart of Darkness', 'Joseph Conrad', 90, true)
const book2 = new Book('Artemis Fowl', 'Eoin Colfer', 100, true)
const book3 = new Book('Konzertstuck', 'Carl Maria von Weber', 30, true)
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

addBookToLibrary(new Book('Can I skip', 'a few steps', 2, false))
addBookToLibrary(new Book('This should be in the next line', 'author', 2, false))

function Book (title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
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


function createBookCard(Book) {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')

    bookCard.classList.add('book-card')
    title.textContent = Book.title;
    author.textContent = Book.author;
    
    bookCard.append(title)
    bookCard.append(author)
    bookShelf.append(bookCard)
}

let modal = document.getElementById("modal");
let modalBtn = document.getElementById("addBookBtn")

modalBtn.onclick = function() {
    modal.style.display = "block";
}
/*window.onclick = function(event) {
    if (!event.target == modal) {
      modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if(event.target != modal && event.target.parentNode != modal) {
        modal.style.display = "none";
    }
}*/
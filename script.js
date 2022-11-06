let library = [];

function Book (title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        if(read == true) {
            return(title + " by " + author + ", " + numberOfPages + ", read")
        }
        else {
            return(title + " by " + author + ", " + numberOfPages + ", not read")
        }
        
    }
}

//Add to array
function addBookToLibrary(Book) {
    library.push(Book)
}

const book1 = new Book('Heart of Darkness', 'Joseph Conrad', 90, true)
const book2 = new Book('Artemis Fowl', 'Eoin Colfer', 100, true)
const book3 = new Book('Konzertstuck', 'Carl Maria von Weber', 30, true)
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

addBookToLibrary(new Book('Can I skip', 'a few steps', 2, false))

const bookShelf = document.querySelector('.book-shelf');

function display() {
    for (let eachBook of library) {
        console.log(eachBook.info());
        bookShelf.textContent += '| ' + eachBook.info() + ' |\r\n';
    }
}

display();
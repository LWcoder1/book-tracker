let myLibrary = [];
const button = document.querySelector(".submit");
const bookList = document.querySelector(".listed-books");



function Book() {
    this.title = document.querySelector(".title").value;
    this.author = document.querySelector(".author").value;
    this.pages = document.querySelector(".pageNumber").value;
    this.checked = document.querySelector(".checkbox").checked;    
}

function addBookToLibrary(book) {
    const finishedBox = document.createElement("div");
    finishedBox.classList.add("finished");
    const finishedBoxH1 = document.createElement("h1");
    finishedBoxH1.textContent = "Finished";
    finishedBox.appendChild(finishedBoxH1); 

    const newBook = document.createElement("div");
    const newBookClassList = newBook.classList;
    newBookClassList.add("book-example");

    const darkCovering = document.createElement("div");
    const gridFormat = document.createElement("div");

    darkCovering.classList.add("dark-covering");
    newBook.appendChild(darkCovering);

    gridFormat.classList.add("grid-format");
    newBook.appendChild(gridFormat);

    const header = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("p");

    title.textContent = `${book.title}`;
    author.textContent = `by: ${book.author}`

    header.appendChild(title);
    header.appendChild(author);

    gridFormat.appendChild(header);

    const footer = document.createElement("div");
    footer.classList.add("footer");
    
    newBook.appendChild(footer);

    const footerX = document.createElement("h1");
    footerX.textContent = "X";
    footerX.classList.add("remove");
    footerX.addEventListener("click", () => {
        bookList.removeChild(newBook);
    })


    const finished = document.createElement("div");

    const checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = "Finished"

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("button");
    checkBox.checked = book.checked;

    finished.appendChild(checkboxLabel);
    finished.appendChild(checkBox);

    if (checkBox.checked == true) {
        gridFormat.appendChild(finishedBox);
    }


    const pages = document.createElement("p");
    pages.textContent = `Page ${book.pages}`;

    footer.appendChild(footerX);
    footer.appendChild(finished);
    footer.appendChild(pages);

    gridFormat.appendChild(footer);


    bookList.appendChild(newBook);
       
    checkBox.addEventListener("click", () => {
        if (checkBox.checked) {
            gridFormat.appendChild(finishedBox);
        }
        else {
            if (gridFormat.contains(finishedBox)) {
                gridFormat.removeChild(finishedBox);
            }
        }
    })
}

button.addEventListener("click", () => {
    const book = new Book();
    myLibrary.push(book);
    if (book.title !== "" || book.author !== "" || book.pages !== "") {
        addBookToLibrary(book);
    }
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".pageNumber").value = "";
    document.querySelector(".checkbox").checked = false;    

    }
);
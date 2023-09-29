class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}.`;
        };
    }
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
console.log(theHobbit.info());
theHobbit.read = true;
console.log(theHobbit.info());
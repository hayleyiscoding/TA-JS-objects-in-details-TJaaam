class BookList {
  constructor(root, list = []) {
    this.list = list;
    this.root = root;
    this.book = null;
  }
  add(title, author, isbn) {
    this.book = new Book(title, author, isbn);
    this.list.push(this.book);
    this.createUI();
    return this.list.length;
  }
  handleDelete(isbn) {
    let index = this.list.findIndex((book) => book.isbn === isbn);
    this.list.splice(index, 1);
    this.createUI();
    return this.list.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.list.forEach((list) => {
      let ui = list.createUI();
      ui.querySelector(".delete").addEventListener(
        "click",
        this.handleDelete.bind(this, list.isbn)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isDone = false;
  }
  handleCheck() {
    this.isDone = !this.isDone;
    // this.createUI();
  }
  createUI() {
    // <tr>
    //             <td>Silver Lining Playbook</td>
    //             <td>Sam Mendis</td>
    //             <td>21345987346598723465</td>
    //             <td><input type="checkbox"></td>
    //             <td>❌</td>
    // </tr>
    let tr = document.createElement("tr");
    let table = document.querySelector("table");
    let td1 = document.createElement("td");
    td1.innerText = this.title;
    let td2 = document.createElement("td");
    td2.innerText = this.author;
    let td3 = document.createElement("td");
    td3.innerText = this.isbn;
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td5.innerText = "❌";
    td5.classList.add("delete");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isDone;
    input.addEventListener("click", this.handleCheck.bind(this));
    td4.append(input);
    tr.append(td1, td2, td3, td4, td5);
    table.append(tr);

    console.log("called in createUI book");
    return tr;
  }
}

let input = document.querySelector("input");
let newBook = new BookList(document.querySelector(".book-list"));

let button = document.querySelector("button");
button.addEventListener("click", (event) => {
  let title = document.querySelector(".title");
  let author = document.querySelector(".author");
  let isbn = document.querySelector(".isbn");
  newBook.add(title.value, author.value, isbn.value);
  title.value = "";
  author.value = "";
  isbn.value = "";
});

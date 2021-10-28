const booksContainer = document.querySelector('.booksContainer')
let ShoppingCart = document.querySelector(".bag-total")
let shoppingCartList = [];
let books = [];
window.onload = ()=> {
loadBooks()
}
function loadBooks (){
fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then((data) => {
  books = data 
  displayBooks()
})
.catch(error => console.log(error))
};


function displayBooks(){
  books.forEach((book) => {
  booksContainer.innerHTML +=` 
<div class= "col-12 col-sm-6 col-md-4 col-lg-3 py-3"
<div class="card">
<img src="${book.img}" class="card-img" alt="...">
<div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <button onclick = "addToCart(${book.asin})"id ="add-cart" class="d-inline p-2 bg-success text-white">${book.price}</button>
    <button class="d-inline p-2 bg-dark text-white">omit</button>
    </div>
    </div>
    </div>`
})
};
function addToCart(asin){
  
const book = books.find((book) =>book.asin ==asin)
shoppingCartList.push(book)
console.log(shoppingCartList)
refreshShoppingCart()
element.closest(".card").classList.add("selected");
};

function refreshShoppingCart(){
  ShoppingCart.innerHTML =""

  shoppingCartList.forEach((book) =>{
    ShoppingCart.innerHTML +=`
    <div class ="shopping-item">
    
    </div>
    ${book.title}
    </div>
    </div>
    ${book.price}
    </div>
    </div>
    <button class="btn btn-danger" onclick="deleteItem('${String(
      book.asin
    )}')">Delete </button>
    `
  })
};

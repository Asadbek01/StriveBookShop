
const booksContainer = document.querySelector('.books-container')
const cartForShopping = {
    quantity: 0,
    items: []
}

const AddToCardButtton = () => {
    const AddToCardButtton = document.querySelectorAll('.addCart')
    AddToCardButtton.forEach(btn => btn.addEventListener('click', element => {
        AddToCardButtton(element)
    })
    )
}

fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then(data => booksContainer.innerHTML = data.map(book => `
<div class= "col-12 col-sm-6 col-md-4 col-lg-3 py-3"
<div class="card h-100">
  <img src="${book.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">${book.price}</p>
    <a href="#" class="btn btn-primary addCart">Add to cart</a>
  </div>
  </div>
</div>`).join(''))
.then(AddToCardButtton())
 .catch(error => error)
 const add = element =>{
     
 }

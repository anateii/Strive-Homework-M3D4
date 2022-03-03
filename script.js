//EXERCISE 0 Get all the products from the API using a fetch --> https://striveschool-api.herokuapp.com/books

window.onload = () => {
    loadBooks()
}  


function loadBooks() {
  fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())

.then(result => {
    const container = document.getElementById("container");
  
    const html = result.map(
        (element) => ` 
       
       
        <div class="card">
  <img src=${element.img} class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

        
        
    `
      )
      .join("");
      const row = `<div class="row">${html}</div>`;

    container.innerHTML = row;

     
})
.catch(error => {
  console.error('Error:', error);
});
}

//EXERCISE 1 -->  Display the list of items available on the page using template literals `` and .forEach OR .map ()

/*
 
const books = book.map((element) => {
    return `${element.img}, ${element.title}, ${element.price}`;
  });
  


  const container = document.getElementById("container");
  
  const html = book.map(
      (element) => ` <div>
          <img src=${element.img}>
          <h3>${element.title}</h3>
          <h4>${element.price}</h4>
      </div>`
    )
    .join("");

    const row = `<div class="row">${html}</div>`;

    container.innerHTML = row;
*/



















//EXERCISE 0 Get all the products from the API using a fetch --> https://striveschool-api.herokuapp.com/books

  
  fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
let data = []
let rowNode = document.querySelector('#books')

const fetchBooks = async () => {
  try {
    let response = await fetch('https://striveschool-api.herokuapp.com/books')
    if (response.ok) {
      data = await response.json()
      console.log(data)
      displayBooks()
    } else {
      console.log('no response')
    }
  } catch (error) {
    console.log(error)
  }
}

const displayBooks = () => {
  data.forEach((book) => {
    rowNode.innerHTML += `
        <div class="col mb-2">
            <div class="card card-main shadow bg-white rounded" height="50px">
                <img class="card-img-top shadow" src="${book.img}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-title main-card-title">${book.title}</p>
                    <p class="card-title main-card-title">${book.price}€</p>
                </div>
                <div class="mb-1 ms-1 p-2" role="group" aria-label="skip button">
                    <button type="button" class="btn btn-outline-warning btn-sm" onclick="removeBook(this)">Skip</button>    
                </div>
            </div>
        </div>
    `
  })
}

const removeBook = (button) => {
  let card = button.closest('.col')
  card.classList.add('d-none')
}

window.onload = () => {
  fetchBooks()
}

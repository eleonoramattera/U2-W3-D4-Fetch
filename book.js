const fetchBooks = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books");

    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      let rowBooks = document.getElementById("libri");
      data.forEach((libro) => {
        rowBooks.innerHTML = rowBooks.innerHTML += `
            <div class="col col-2 col-md-3 mb-2">

                <div class="card card-main shadow bg-white rounded" height="50px id="cardSingola">
                    <img class="card-img-top shadow" src="${libro.img}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title main-card-title">${libro.title}</h5>
                        <p class="card-title main-card-title">${libro.price}</p>
                    </div>
                    <div class="mb-1 ms-1 p-2" role="group" aria-label="skip button">
                        <button type="button" class="btn btn-outline-warning btn-sm id="bottone onclick="skippa(event)">Skip</button>    
                    </div>
                </div>

            </div>
        `;
      });
    } else {
      console.log("errore json");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchBooks();

const skippa = (e) => {
  e.target.partentElement.partentElement.partentElement.remove();
};

skippa();


function TicketCompleted(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;

    document.getElementById("container_card").innerHTML = `
    <div id="welcome_card" class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${name} ${surname}</h5>
        <p class="card-text">Benuto nel mio sito </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;







}
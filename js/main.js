let btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        event.preventDefault(); 
        let name = document.getElementById("name").value;
        console.log("Nome:" + " " + name);

        let lastname = document.getElementById("lastname").value;
        console.log("Nome:" + " " + lastname);

        let age = document.getElementById("age").value;
        console.log("Età:" + " " + age);

        let km = document.getElementById("km").value;
        console.log("Km:" + " " + km);

        let ticketPrice = km * 0.21;

        if (age == "Minorenne") {
          ticketPrice = ticketPrice - (ticketPrice * 0.2);
            console.log("Il prezzo per un minorenne sarà di" + " " + ticketPrice);
        }
        else if (age == "Over65") {
            ticketPrice = ticketPrice - (ticketPrice * 0.4);
            console.log("Il prezzo per un Over65 sarà di" + " " + ticketPrice);
        }

        let ticket = document.getElementById('ticket');
        ticket.classList.remove('d-none');
        document.getElementById('passengername').innerHTML = name + " " + lastname;
        document.getElementById('offer').innerHTML = age;
        document.getElementById('cab').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("codecp").innerHTML = Math.floor(Math.random() * 10000) + 90001;
        document.getElementById('price').innerHTML = ticketPrice;

    }
)
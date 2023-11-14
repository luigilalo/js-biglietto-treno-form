let btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        event.preventDefault(); 
        let name = document.getElementById("name").value;
        console.log("Nome:", name);

        let lastname = document.getElementById("lastname").value;
        console.log("Nome:", lastname);

        let age = document.getElementById("age").value;
        console.log("Età:", age);

        let km = document.getElementById("km").value;
        console.log("Km:", km);

        let ticketPrice = km * 0.21;

        if (age == "Minorenne") {
          ticketPrice = ticketPrice - (ticketPrice * 0.2);
            console.log("Il prezzo per un minorenne sarà di" + " " + ticketMinor);
        }
        else if (age == "Over65") {
            ticketPrice = ticketPrice - (ticketPrice * 0.2);
            console.log("Il prezzo per un Over65 sarà di" + " " + ticketOver65);
        }
    }
)
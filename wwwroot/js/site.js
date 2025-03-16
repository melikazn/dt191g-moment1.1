// Funktion för att kontrollera veckodagen och visa ett meddelande baserat på det
function checkDayofWeek() {
    // Hämta veckodagen som ett tal (0-6), där 0 = Söndag och 6 = Lördag
    const dayOfWeek = new Date().getDay(); 

    // Om det är fredag (5), visa meddelandet "Trevlig helg! Idag är det fredag!"
    if (dayOfWeek === 5) {
        alert("Idag är det fredag!");
    } 
    // Om det är helg (Söndag eller Lördag), visa meddelandet "Trevlig helg!"
    else if (dayOfWeek === 0 || dayOfWeek === 6) {
        alert("Trevlig helg! ");
    } 
    // Om det är en vardag, visa meddelandet "Trevlig vardag!"
    else {
        alert("Trevlig vardag! ");
    }
}

// Kör funktionen när sidan har laddats, men bara om vi är på en sida som innehåller "/razor"
window.onload = function () {
    // Hämta den nuvarande sökvägen för sidan och gör den till små bokstäver för att jämföra
    const currentPath = window.location.pathname.toLowerCase();

    // Om sökvägen innehåller "/razor", kör funktionen checkDayofWeek
    if (currentPath.includes("/razor")) {
        checkDayofWeek();
    }
};

// Hämta de DOM-element som används i formuläret
const contactLink = document.getElementById("contact-link");
const contactForm = document.getElementById("contact-form");
const closeForm = document.getElementById("close-form");

// Kontrollera att alla nödvändiga element finns innan vi försöker lägga till event listeners
if (contactLink && contactForm && closeForm) {
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        contactForm.style.display = "block"; 
    });

    closeForm.addEventListener("click", function () {
        contactForm.style.display = "none"; 
    });
} else {
    console.error("Ett eller flera element saknas: Kontaktlänk, formulär eller stäng-knapp.");
}

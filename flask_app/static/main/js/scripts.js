function addCardToToolbar() {
    // Create a new div element for the rectangle
    var newCard = document.createElement("div");
    newCard.className = "rectangle";
    newCard.onclick = function() {
        copyCardToNav(this);
    };

    // Get the toolbar
    var toolbar = document.querySelector('.toolbar');

    toolbar.insertBefore(newCard, toolbar.lastElementChild);
}

function copyCardToNav(card) {
    var nav = document.querySelector('nav');
    var copiedCard = card.cloneNode(true); // Clone the card, including its children and attributes
    nav.appendChild(copiedCard);
}
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
    // Create a new `card-column`
    var newColumn = document.createElement("div");
    newColumn.className = "card-column";
    
    // Clone the card, including its children and attributes
    var cardCopy = card.cloneNode(true);

    // Remove `on click` response
    cardCopy.onclick = function() {
        addDutyToColumn(newColumn);
    };

    // Add the `card` to the `card-column`
    newColumn.appendChild(cardCopy)

    // Add the `card-column` to the `nav`
    document.querySelector('nav').appendChild(newColumn);
}

function addDutyToColumn(column) {
    var duty = document.createElement("div");
    duty.className = "duty";

    var yPos = 70 + column.childElementCount * 90;
    duty.style.top = yPos + 'px';

    column.append(duty);

    for (var i = 0; i < column.childElementCount; ++i)
        column.children[i].style.zIndex = -i;

    return duty;
}
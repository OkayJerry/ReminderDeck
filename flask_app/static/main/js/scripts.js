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

    // Add the `card` to the `card-column`
    newColumn.appendChild(cardCopy)

    // Add the `card-column` to the `nav`
    document.querySelector('nav').appendChild(newColumn);

    var relativePos = 40 + 'px';
    if (cardCopy.className == "card-workout")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Bench Press";
        dutyTextBox.style.top = relativePos
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Squat";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Deadlift";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Push-Ups";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Sprint";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);

        var duty6 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Pull-Ups";
        dutyTextBox.style.top = relativePos;
        duty6.appendChild(dutyTextBox);
    }
    else if (cardCopy.className == "card-study")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Read Textbook";
        dutyTextBox.style.top = relativePos;
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Practice Problems";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Flashcards";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Review Physics";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Practice Spanish";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);
    }
    else if (cardCopy.className == "card-guitar")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Scales";
        dutyTextBox.style.top = relativePos
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Chords";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Harmony";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Arpeggios";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Melody";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);

        var duty6 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Triads";
        dutyTextBox.style.top = relativePos;
        duty6.appendChild(dutyTextBox);

        var duty7 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Sight-Read";
        dutyTextBox.style.top = relativePos;
        duty7.appendChild(dutyTextBox);

        var duty8 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Improvise";
        dutyTextBox.style.top = relativePos;
        duty8.appendChild(dutyTextBox);

        var duty9 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Ear Training";
        dutyTextBox.style.top = relativePos;
        duty9.appendChild(dutyTextBox);
    }
    else if (cardCopy.className == "card-duck")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Large";
        dutyTextBox.style.top = relativePos
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Mini";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Blue";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Translucent";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);
    }
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
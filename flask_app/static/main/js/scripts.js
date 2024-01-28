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
    document.querySelector('.workspace').appendChild(newColumn);

    var relativePos = 40 + 'px';
    if (cardCopy.className == "card-workout")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Bench Press -- 8 / 8";
        dutyTextBox.style.top = relativePos;
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Squat -- 5 / 6";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Deadlift -- 0 / 6";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Push-Ups -- 10 / 50";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Sprint -- 15:00";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);

        var duty6 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Pull-Ups -- 0/20";
        dutyTextBox.style.top = relativePos;
        duty6.appendChild(dutyTextBox);
    }
    else if (cardCopy.className == "card-study")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Read Textbook -- 25:00";
        dutyTextBox.style.top = relativePos;
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Practice Problems -- 20:00";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Flashcards -- 10:00";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Review Physics -- 20:00";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Practice Spanish -- 17:00";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);
    }
    else if (cardCopy.className == "card-guitar")
    {
        var duty1 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Scales -- 20:00";
        dutyTextBox.style.top = relativePos
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Chords -- 20:00";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Harmony -- 10:00";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Arpeggios -- 30:00";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);

        var duty5 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Melody -- 20:00";
        dutyTextBox.style.top = relativePos;
        duty5.appendChild(dutyTextBox);

        var duty6 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Triads -- 20:00";
        dutyTextBox.style.top = relativePos;
        duty6.appendChild(dutyTextBox);

        var duty7 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Sight-Read -- 10:00";
        dutyTextBox.style.top = relativePos;
        duty7.appendChild(dutyTextBox);

        var duty8 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Improvise -- 30:00";
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
        dutyTextBox.textContent = "Large -- 2 / 20";
        dutyTextBox.style.top = relativePos
        duty1.appendChild(dutyTextBox);

        var duty2 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Mini -- 8 / 30";
        dutyTextBox.style.top = relativePos;
        duty2.appendChild(dutyTextBox);

        var duty3 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Blue -- 3 / 6";
        dutyTextBox.style.top = relativePos;
        duty3.appendChild(dutyTextBox);

        var duty4 = addDutyToColumn(newColumn);
        
        var dutyTextBox = document.createElement("div");
        dutyTextBox.className = "duty-textbox";
        dutyTextBox.textContent = "Translucent -- 5 / 10";
        dutyTextBox.style.top = relativePos;
        duty4.appendChild(dutyTextBox);
    }
}

function addDutyToColumn(column) {
    var duty = document.createElement("div");
    duty.className = "duty";

    var yPos = 35 + column.childElementCount * 90;
    duty.style.top = yPos + 'px';

    column.append(duty);

    for (var i = 0; i < column.childElementCount; ++i)
        column.children[i].style.zIndex = -i;

    return duty;
}

function createStepper(max) {
    var stepper = document.createElement("div");
    stepper.className = 'stepper';
    stepper.innerHTML = '0 / '+ max;
    return stepper;
}
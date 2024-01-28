function insertRow() {
    var container = document.querySelector('.container');
    var card = document.querySelector('.card');
    var plus = document.querySelector('.plus');

    // Create a new row
    var newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.style.height = plus.offsetHeight + 'px';
    newRow.style.width = "200px"; // width of top card
    newRow.style.position = 'relative'; // Set position to relative

    // Create and insert a thicker <hr> inside the new row
    var hr = document.createElement('hr');
    hr.style.borderTop = '2px solid black'; // Adjust thickness here
    hr.style.position = 'absolute'; // Set position to absolute
    hr.style.bottom = '0'; // Align to the bottom
    hr.style.width = '100%'; // Make hr span the entire width
    hr.style.marginTop = '0'; // Remove default margin
    hr.style.marginBottom = '0'; // Remove default margin
    newRow.appendChild(hr);

    // Insert the new row above the plus sign and under the card
    container.insertBefore(newRow, plus);
}

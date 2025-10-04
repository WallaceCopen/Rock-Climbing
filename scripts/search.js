

function toggleSearch() {
    const searchElement = document.getElementById('search');
    const textInput = document.getElementById('textInput'); // Ensure to get the input element

    if (searchElement.style.display === 'none') {
        searchElement.style.display = 'block'; // Show the element
        textInput.focus(); // Set focus to the input
    } else {
        searchElement.style.display = 'none'; // Hide the element
    }
}

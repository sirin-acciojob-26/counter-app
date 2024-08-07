document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const countDisplay = document.getElementById('count');
    const errorMessage = document.getElementById('error-message');
    const clearButton = document.getElementById('clear');

    // Function to update the display and clear button visibility
    function updateDisplay() {
        countDisplay.textContent = count;
        clearButton.style.display = count === 0 ? 'none' : 'inline';
    }

    // Increment button event listener
    document.getElementById('increment').addEventListener('click', () => {
        count++;
        errorMessage.style.display = 'none';
        updateDisplay();
    });

    // Decrement button event listener
    document.getElementById('decrement').addEventListener('click', () => {
        if (count > 0) {
            count--;
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
        updateDisplay();
    });

    // Clear button event listener
    clearButton.addEventListener('click', () => {
        count = 0;
        errorMessage.style.display = 'none';
        updateDisplay();
    });

    // Initial display update
    updateDisplay();
});

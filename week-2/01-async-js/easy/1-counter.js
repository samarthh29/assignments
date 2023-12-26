let counter = 0;

 function increaseCounterAsync() {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    //

    // Increase the counter after the asynchronous operation
    counter++;

    // Update the counter display
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById('counterDisplay').innerText = `Counter: ${counter}`;
}

// Automatically increase the counter every second
setInterval(increaseCounterAsync, 1000);

// Initial call to start the counter
updateCounterDisplay();

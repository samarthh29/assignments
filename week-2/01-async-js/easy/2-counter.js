let counter = 0;

async function increaseCounterAsync() {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Increase the counter after the asynchronous operation
    counter++;

    // Update the counter display
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById('counterDisplay').innerText = `Counter: ${counter}`;
}

// Function to increase the counter after a delay
function increaseCounterWithDelay() {
    increaseCounterAsync(); // Increment the counter
    setTimeout(increaseCounterWithDelay, 1000); // Schedule the next update after 1000 milliseconds (1 second)
}

// Initial call to start the counter
increaseCounterWithDelay();

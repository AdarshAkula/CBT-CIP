document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('event-name').value.trim();
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value.trim();

    // Validate input
    if (!name || !date || !time || !location) {
        displayMessage("Please fill in all fields.", "error");
        return;
    }

    // Create a new event item
    const eventItem = document.createElement('li');
    eventItem.textContent = `${name} - ${date} ${time} @ ${location}`;

    // Add to the event list
    document.getElementById('event-list').appendChild(eventItem);

    // Clear the form
    this.reset();

    // Display success message
    displayMessage("Event created successfully!");
});

// Function to display messages
function displayMessage(msg, type = "success") {
    const messageDiv = document.getElementById('message');
    message
}
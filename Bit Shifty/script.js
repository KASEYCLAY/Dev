const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false; // Flag to track "in-between" state
    if (e.shiftKey && this.checked) {
        for (const checkbox of checkboxes) {
            console.log(checkbox); // Debugging: Log each checkbox during iteration

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween; // Toggle inBetween
                console.log(`Toggled inBetween at:`, checkbox); // Log when inBetween changes
            }

            if (inBetween) {
                checkbox.checked = true; // Check the in-between boxes
                console.log(`Checked:`, checkbox); // Log when a checkbox is checked
            }
        }
    }

    lastChecked = this; // Update last checked
    console.log(`Last checked set to:`, lastChecked); // Log the last checked box
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

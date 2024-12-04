const endpoint = 'gb.json'; // Path to your JSON file
const cities = [];
// Fetch city data and populate the `cities` array
async function fetchCities() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        cities.push(...data); // Spread operator to add all items to the `cities` array
    } catch (error) {
        console.error('Failed to fetch cities:', error);
    }
}

// Find matches for the input text
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi'); // Case-insensitive, global match
        return place.city.match(regex) || place.admin_name.match(regex);
    });
}

// Display matches in the suggestions list
function displayMatches() {
    const matchArray = findMatches(this.value, cities); // `this.value` is the current input value
    const html = matchArray
        .map(place => {
            // Highlight the matching part in city or admin names
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const adminName = place.admin_name.replace(regex, `<span class="hl">${this.value}</span>`);

            return `
                <li>
                    <span class="name">${cityName}, ${adminName}</span>
                    <span class="details">
                        Country: ${place.country} | Population: ${Number(place.population).toLocaleString()}
                    </span>
                </li>
            `;
        })
        .join(''); // Join array of strings into a single string

    suggestions.innerHTML = html; // Update the suggestions list
}

// Select input and suggestions elements from the DOM
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// Fetch cities on page load
fetchCities();

// Listen for input events on the search box
searchInput.addEventListener('input', displayMatches);

async function fetchData() {
    try {
        let response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        let data = await response.json();
        document.getElementById('data').innerText = `Latest Value: ${data.value}`; // Adjust based on API response
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('data').innerText = 'Error loading data';
    }
}

// Fetch data initially and then every minute
setInterval(fetchData, 60000); // Update every minute
window.onload = fetchData; // Fetch data on page load

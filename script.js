document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from an API or JSON file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const indicatorData = document.getElementById('indicator-data');
      indicatorData.textContent = `Date: ${data.date}, High: ${data.high}, Low: ${data.low}, Close: ${data.close}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('indicator-data').textContent = 'Failed to load data.';
    });
});

// JavaScript to toggle tabs
console.log("hi");
function showTab(tabName) {
    // Deactivate all tabs and tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate the clicked tab and its content
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-bookings`).classList.add('active');
}
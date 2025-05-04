function updateTime() {
    const currentTimeDiv = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    currentTimeDiv.textContent = `${hours}:${minutes} ${ampm}`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateTime(); // Update time immediately
    setInterval(updateTime, 1000); // Update time every second
});

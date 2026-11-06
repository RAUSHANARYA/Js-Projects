const timee = document.querySelector('#time');
const datee = document.querySelector('#date');

function getE() {

    // Get fresh date and time every time
    const now = new Date();

    const date = now.getDate();
    const year = now.getFullYear();

    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // AM/PM
    const amPm = hr >= 12 ? "PM" : "AM";

    let hour12 = hr % 12;

    if (hour12 === 0) {
        hour12 = 12;
    }

    // Leading zeros
    const hour = String(hour12).padStart(2, "0");
    const minutes = String(min).padStart(2, "0");
    const seconds = String(sec).padStart(2, "0");

    // Date formatting
    const dayName = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    const monthName = now.toLocaleDateString("en-IN", {
        month: "long"
    });

    // Display time
    const formTime = `${hour}:${minutes}:${seconds} ${amPm}`;
    timee.innerText = formTime;

    // Display date
    const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;
    datee.innerText = formattedDate;
}

// Run immediately
getE();

// Update every second
setInterval(getE, 1000);
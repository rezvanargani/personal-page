document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // If there are any navbar-burgers, add click event listeners
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(burger => {
            burger.addEventListener('click', () => {
                // Get the target from "data-target" attribute
                const target = burger.dataset.target;
                const targetElement = document.getElementById(target);

                // Toggle the "is-active" class
                burger.classList.toggle('is-active');
                targetElement.classList.toggle('is-active');
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Define some sample events
    const events = {
        '2024-12-21': [
            { title: 'Christmas holidays', details: 'December 21, 2024 - January 6' }
        ],
        '2025-01-07': [
            { title: 'Movable holiday', details: 'Allday' }
        ],
        '2025-01-15': [
            { title: 'Submission of grades J1, J2', details: '12:00 (co-op courses)' }
        ]
    };

    // Initialize the Bulma calendar
    const calendar = bulmaCalendar.attach('#calendar', {
        type: 'date',
        displayMode: 'inline',
        isRange: false,
        dateFormat: 'yyyy-mm-dd',
    })[0]; // bulmaCalendar.attach returns an array

    // Reference to the events container
    const eventsContainer = document.getElementById('events-container');

    // Helper function to display events for a selected date
    function displayEvents(selectedDateObject) {
        const selectedDate = selectedDateObject.data.date.start;
        const date = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

        eventsContainer.innerHTML = ''; // Clear existing events
        const eventDate = `<p class="event-date">${date}</p>`;
        if (events[date]) {
            const eventItems = events[date]
                .map(event => `<p><strong>${event.title}</strong></p><p>${event.details}</p>`)
                .join('');
            eventsContainer.innerHTML = eventDate + eventItems;
        } else {
            eventsContainer.innerHTML = eventDate + '<p>No events on this date.</p>';
        }
    }

    // Event listener for date selection
    calendar.on('select:start', (event) => {
        
        // cek daata di dalam object date
        console.log(event)
        console.log(event.data.date)


        displayEvents(event);
    });
});
document.addEventListener("scroll", () => {
    const container = document.getElementById("rotating-image-container");
    const scale = Math.max(0.5, 1 - window.scrollY / 500); // Scale down to 50%
    container.style.transform = `scale(${scale})`;
    container.style.height = `${Math.max(150, 500 - window.scrollY)}px`; // Shrink height
});
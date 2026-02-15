document.addEventListener('DOMContentLoaded', () => {
    // Demo Initialization
    const memoryLane = [10, 20, 30, 40, 50]; // Initial values
    const streetContainer = document.getElementById('array-street');
    const outputLog = document.getElementById('output-log');
    const visitBtn = document.getElementById('visit-btn');
    const houseIndexInput = document.getElementById('house-index');

    // Function to render the street
    function renderStreet() {
        streetContainer.innerHTML = '';
        memoryLane.forEach((resident, index) => {
            const house = document.createElement('div');
            house.classList.add('house');
            house.dataset.index = index;
            house.style.animation = `popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
            house.style.animationDelay = `${index * 0.1}s`;
            house.style.opacity = '0'; // Start invisible

            // Roof element for styling
            const roof = document.createElement('div');
            roof.classList.add('house-roof');
            house.appendChild(roof);

            // House content
            const number = document.createElement('div');
            number.classList.add('house-number');
            number.textContent = `Index ${index}`;

            const residentDisplay = document.createElement('div');
            residentDisplay.classList.add('house-resident');
            residentDisplay.textContent = resident;

            house.appendChild(residentDisplay);
            house.appendChild(number);

            // Add click event
            house.addEventListener('click', () => visitHouse(index));

            streetContainer.appendChild(house);
        });
    }

    // Function to handle visiting a house
    function visitHouse(index) {
        // Validate index
        if (index < 0 || index >= memoryLane.length) {
            logMessage(`Error: House at index ${index} does not exist! (Array Index Out of Bounds)`);
            return;
        }

        // Highlight the house
        const houses = document.querySelectorAll('.house');
        houses.forEach(h => h.classList.remove('active'));
        houses[index].classList.add('active');

        // Update input
        houseIndexInput.value = index;

        // Log the event
        const value = memoryLane[index];
        logMessage(`Privet! You visited house #${index}. The resident is number ${value}.`);
    }

    // Helper to log messages
    function logMessage(msg) {
        const p = document.createElement('p');
        p.textContent = `> ${msg}`;
        outputLog.appendChild(p);
        outputLog.scrollTop = outputLog.scrollHeight;
    }

    // Event Listeners
    visitBtn.addEventListener('click', () => {
        const index = parseInt(houseIndexInput.value);
        visitHouse(index);
    });

    // Initial render
    renderStreet();

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    // Add scroll animations if needed (simple fade-ins handled by CSS for now)
});

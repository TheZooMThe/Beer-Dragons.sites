let chroniclesData = {};

async function loadAllChronicles() {
    const chroniclesResponse = await fetch('js/let_history.json');
    chroniclesData = await chroniclesResponse.json();

    const container = document.getElementById('chronicles-div');

    for (const event of chroniclesData.events ) {

    
        const entry = document.createElement('p');
        entry.textContent = `${event.year} ${event.day} ${event.month} - ${event.description}`;
        entry.className = "chronicles-event";
        
        container.appendChild(entry);

        }
};

document.addEventListener('DOMContentLoaded', loadAllChronicles);
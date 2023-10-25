let truckData = [];

const getTrucks = async () => {
    const response = await fetch("ford-trucks.json");
    truckData = await response.json();
    displayTrucks(truckData);
}

function filterTrucks() {
    const budget = document.getElementById("budget").value;
    const truckListElement = document.getElementById("truckList");
    truckListElement.innerHTML = '';

    truckData.forEach(truck => {
        if (truck.price <= budget) {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(`Model: ${truck.model}, Year: ${truck.year}, Engine: ${truck.engine}, Transmission: ${truck.transmission}, Price: $${truck.price}`));
            truckListElement.appendChild(listItem);
        }
    });
}
let truckData = [
    {
        "model": "F-150",
        "year": 2013,
        "engine": "3.5L V6",
        "transmission": "6-speed automatic",
        "price": 25000
    },
    {
        "model": "F-150",
        "year": 2014,
        "engine": "5.0L V8",
        "transmission": "6-speed automatic",
        "price": 27000
    },
    {
        "model": "F-150",
        "year": 2015,
        "engine": "2.7L EcoBoost V6",
        "transmission": "6-speed automatic",
        "price": 29000
    },
    {
        "model": "F-150",
        "year": 2016,
        "engine": "3.5L EcoBoost V6",
        "transmission": "6-speed automatic",
        "price": 31000
    },
    {
        "model": "F-150",
        "year": 2017,
        "engine": "5.0L V8",
        "transmission": "10-speed automatic",
        "price": 33000
    },
    {
        "model": "F-150",
        "year": 2018,
        "engine": "3.3L V6",
        "transmission": "6-speed automatic",
        "price": 35000
    },
    {
        "model": "F-150",
        "year": 2019,
        "engine": "3.5L EcoBoost V6",
        "transmission": "10-speed automatic",
        "price": 37000
    },
    {
        "model": "F-150",
        "year": 2020,
        "engine": "5.0L V8",
        "transmission": "10-speed automatic",
        "price": 38000
    },
    {
        "model": "F-150",
        "year": 2021,
        "engine": "3.5L PowerBoost V6 Hybrid",
        "transmission": "10-speed automatic",
        "price": 40000
    },
    {
        "model": "F-150",
        "year": 2022,
        "engine": "3.5L PowerBoost V6 Hybrid",
        "transmission": "10-speed automatic",
        "price": 42000
    }
];

// here is the fetch I couldn't get working so I just popluated the array above manually. 

// const getTrucks = async () => {
//     const response = await fetch('https://nathanharris90.github.io/publicjson/ford-trucks.json');
//     truckData = await response.json();
//     displayTrucks(truckData);
// }



function filterTrucks() {
    const budget = parseInt(document.getElementById("budget").value);
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

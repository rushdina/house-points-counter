// Store house data in an object
let houses = {
    gryffindor: { count: 0, total: 0, pt: "gryffindor-pt", save: "save-gryff", totalPt: "total-gryff"},
    ravenclaw: { count: 0, total: 0, pt: "ravenclaw-pt", save: "save-raven", totalPt: "total-raven"},
    hufflepuff: { count: 0, total: 0, pt: "hufflepuff-pt", save: "save-huffle", totalPt: "total-huffle" },
    slytherin: { count: 0, total: 0, pt: "slytherin-pt", save: "save-slyth", totalPt: "total-slyth" },
}

// Increment house points
function increment(houseName) {
    let house = houses[houseName];
    house.count += 10;
    document.getElementById(house.pt).innerText = house.count;
}

// Decrement house points
function decrement(houseName) {
    let house = houses[houseName];
    house.count -= 10;
    document.getElementById(house.pt).innerText = house.count;
}

// Save house points
function save(houseName) {
    let house = houses[houseName];
    let countStr = house.count + ", ";
    document.getElementById(house.save).textContent += countStr;

    house.total += house.count;
    document.getElementById(house.totalPt).innerText = house.total;

    house.count = 0;
    document.getElementById(house.pt).innerText = 0;
}
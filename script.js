// House definitions
const houses = {
  gryffindor: { name: "Gryffindor", point: 0, total: 0, step: 10, entries: [] },
  ravenclaw: { name: "Ravenclaw", point: 0, total: 0, step: 10, entries: [] },
  hufflepuff: { name: "Hufflepuff", point: 0, total: 0, step: 10, entries: [] },
  slytherin: { name: "Slytherin", point: 0, total: 0, step: 10, entries: [] },
};

// Render houses dynamically
const container = document.getElementById("container");

const grid = document.createElement("div");
grid.classList.add("grid-container");
container.appendChild(grid);

Object.keys(houses).forEach((house) => {
  const t = houses[house];

  const houseDiv = document.createElement("div");
  houseDiv.className = `house ${house}-house`;

  houseDiv.innerHTML = `
    <h2>${t.name}</h2>
    <p id="${house}-point-el">0</p>
    <button id="${house}-increment-btn" class="btn">+10</button>
    <button id="${house}-decrement-btn" class="btn">-10</button>
    <button id="${house}-save-btn" class="save-btn">Save</button>
    <p>Point History: <span id="${house}-entries-el"></span></p>
    <p>Total: <span id="${house}-total-el">0</span></p>
  `;

  grid.appendChild(houseDiv);
});

// Hook up event listeners and DOM elements
Object.keys(houses).forEach((house) => {
  const t = houses[house];

  t.pointEl = document.getElementById(`${house}-point-el`);
  t.entriesEl = document.getElementById(`${house}-entries-el`);
  t.totalEl = document.getElementById(`${house}-total-el`);
  t.incBtn = document.getElementById(`${house}-increment-btn`);
  t.decBtn = document.getElementById(`${house}-decrement-btn`);
  t.saveBtn = document.getElementById(`${house}-save-btn`);

  t.incBtn?.addEventListener("click", () => changePoint(house, t.step));
  t.decBtn?.addEventListener("click", () => changePoint(house, -t.step));
  t.saveBtn?.addEventListener("click", () => save(house));
});

// Update functions
function updateTeam(house) {
  const t = houses[house];
  if (t.pointEl) t.pointEl.textContent = t.point;
  if (t.entriesEl) t.entriesEl.textContent = t.entries.join(" | ");
  if (t.totalEl) t.totalEl.textContent = t.total;
}

function changePoint(house, amount) {
  const t = houses[house];
  t.point += amount; // allow negative points
  updateTeam(house);
}

function save(house) {
  const t = houses[house];
  if (t.point === 0) return;
  t.entries.push(t.point);
  t.total += t.point;
  t.point = 0;
  updateTeam(house);
}

const houses = {
  gryffindor: { point: 0, total: 0, step: 10, entries: [] },
  ravenclaw: { point: 0, total: 0, step: 10, entries: [] },
  hufflepuff: { point: 0, total: 0, step: 10, entries: [] },
  slytherin: { point: 0, total: 0, step: 10, entries: [] },
};

Object.keys(houses).forEach((house) => {
  const t = houses[house];

  // Cache DOM elements dynamically using house
  t.pointEl = document.getElementById(`${house}-point-el`);
  t.entriesEl = document.getElementById(`${house}-entries-el`);
  t.totalEl = document.getElementById(`${house}-total-el`);
  t.incBtn = document.getElementById(`${house}-increment-btn`);
  t.decBtn = document.getElementById(`${house}-decrement-btn`);
  t.saveBtn = document.getElementById(`${house}-save-btn`);

  // Attach event listeners
  t.incBtn?.addEventListener("click", () => changePoint(house, t.step));
  t.decBtn?.addEventListener("click", () => changePoint(house, -t.step));
  t.saveBtn?.addEventListener("click", () => save(house));
});

// Update Functions
function updateTeam(house) {
  const t = houses[house];
  if (t.pointEl) t.pointEl.textContent = t.point;
  if (t.entriesEl) t.entriesEl.textContent = t.entries.join(" | ");
  if (t.totalEl) t.totalEl.textContent = t.total;
}

// Points Functions
function changePoint(house, amount) {
  const t = houses[house];
  t.point += amount; // allow negative point
  updateTeam(house);
}

function save(house) {
  const t = houses[house];
  if (t.point === 0) return; // skip saving zero
  t.entries.push(t.point);
  t.total += t.point;
  t.point = 0;
  updateTeam(house);
}

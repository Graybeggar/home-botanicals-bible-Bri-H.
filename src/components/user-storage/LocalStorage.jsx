export function saveMyGarden(garden) {
  localStorage.setItem("myGarden", JSON.stringify(garden));
}

export function loadMyGarden() {
  const saved = localStorage.getItem("myGarden");
  return saved ? JSON.parse(saved) : [];
}
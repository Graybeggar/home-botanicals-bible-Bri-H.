////localStorage is a built-in browser feature
export function saveMyGarden(garden) { ////saveMyGarden — Saving a garden to localStorage.
  localStorage.setItem("myGarden", JSON.stringify(garden)); ////localStorage.setItem(key, value) saves a key-value pair to the browser.
}

export function loadMyGarden() { ////loadMyGarden — Getting the garden from localStorage.
  const saved = localStorage.getItem("myGarden"); ////This uses localStorage.getItem(key) to get the value saved under "myGarden". If no data was saved before, this will return null.
  return saved ? JSON.parse(saved) : []; ////This line means: If saved is not null or empty (truthy), then: Use JSON.parse() to convert the string back into an array/object. Otherwise (if null), just return an empty array [] to avoid errors.
}
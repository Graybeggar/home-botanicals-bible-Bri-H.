// Import React and the plant data
import React from "react";
import plants from "../plant-catalog-page/plants";

function FeaturedPlants() {
  // Generate a seed based on today's date in YYYYMMDD format
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "");

  // Create a seeded random number generator to keep daily selection consistent
  function seededRandom(seed) {
    let x = parseInt(seed, 10);
    return () => {
      x = (x * 9301 + 49297) % 233280;
      return x / 233280;
    };
  }

  // Use the seeded random function to shuffle the plant list
  const random = seededRandom(today);
  const shuffledPlants = [...plants].sort(() => random() - 0.5);

  // Select the first 3 plants as today's featured plants
  const featured = shuffledPlants.slice(0, 3);

  return (
    <section>
      <h2>Today's Featured Plants</h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto", // Allows horizontal scrolling on smaller screens
          gap: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {/* Display each featured plant in a styled card */}
        {featured.map((plant) => (
          <div
            key={plant.id}
            style={{
              minWidth: "200px",
              border: "1px solid #ccc",
              padding: "1rem",
              boxSizing: "border-box",
              overflow: "hidden", // Prevents image overflow
            }}
          >
            {/* Plant Image */}
            <img
              src={plant.image}
              alt={plant.name}
              style={{
                width: "50%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            {/* Plant Name */}
            <h3>{plant.name}</h3>
            {/* Plant Description */}
            <p>{plant.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the component for use in other parts of the app
export default FeaturedPlants;
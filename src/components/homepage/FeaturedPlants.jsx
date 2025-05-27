import React from "react";
import plants from "../plant-catalog-page/plants";

function FeaturedPlants() {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "");

  function seededRandom(seed) {
    let x = parseInt(seed, 10);
    return () => {
      x = (x * 9301 + 49297) % 233280;
      return x / 233280;
    };
  }

  const random = seededRandom(today);
  const shuffledPlants = [...plants].sort(() => random() - 0.5);
  const featured = shuffledPlants.slice(0, 3);

  return (
    <section>
      <h2>Featured Plants</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {featured.map((plant) => (
          <div key={plant.id} style={{ border: "1px solid #ccc", padding: "1rem", maxWidth: "200px" }}>
            {/* Plant Image */}
            <img 
              src={plant.image} 
              alt={plant.name} 
              style={{ width: "100%", height: "auto", borderRadius: "8px" }} 
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

export default FeaturedPlants;
import React, { useEffect, useState } from "react";
import { loadMyGarden, saveMyGarden } from "../user-storage/LocalStorage";
import CareTips from "../plant-catalog-page/CareTips";

function MyGardenPage() {
  // State for garden plants list
  const [garden, setGarden] = useState([]);
  // State to track which plants' care tips are visible
  const [visibleTips, setVisibleTips] = useState({});

  // Load saved garden plants from localStorage on component mount
  useEffect(() => {
    let loaded = loadMyGarden() || [];
    // Ensure each plant has a watering interval, defaulting to 7 days
    loaded = loaded.map((plant) => ({
      ...plant,
      wateringIntervalDays: plant.wateringIntervalDays || 7,
    }));
    setGarden(loaded);
  }, []);

  // Remove a plant from the garden by its ID and save updated list
  const removePlant = (plantId) => {
    const updatedGarden = garden.filter((plant) => plant.id !== plantId);
    setGarden(updatedGarden);
    saveMyGarden(updatedGarden);
  };

  // Toggle visibility of care tips for a specific plant
  const toggleTips = (plantId) => {
    setVisibleTips((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  // Format ISO date string to a readable locale date string
  // If no date provided, returns "Never"
  const formatDate = (isoString) => {
    if (!isoString) return "Never";
    return new Date(isoString).toLocaleDateString();
  };

  // Calculate days until next watering based on last watered date and watering interval
  // Returns "Water now!" if overdue, or "Unknown" if data missing
  const daysUntilWatering = (plant) => {
    if (!plant.lastWatered || !plant.wateringIntervalDays) return "Unknown";

    const lastWateredDate = new Date(plant.lastWatered);
    const nextWaterDate = new Date(lastWateredDate);
    nextWaterDate.setDate(nextWaterDate.getDate() + plant.wateringIntervalDays);

    const now = new Date();
    const diffTime = nextWaterDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays < 0
      ? "Water now!"
      : `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  };

  // Mark a plant as watered by updating its lastWatered timestamp to now and saving
  const markAsWatered = (plantId) => {
    const updatedGarden = garden.map((plant) =>
      plant.id === plantId
        ? { ...plant, lastWatered: new Date().toISOString() }
        : plant
    );
    setGarden(updatedGarden);
    saveMyGarden(updatedGarden);
  };

  return (
    <section>
      <h2>My Garden</h2>
      <p style={{ marginBottom: "1.5rem" }}>
        This is where you can keep track of your plants and garden progress.
      </p>

      {garden.length > 0 ? (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {garden.map((plant) => (
            <li
              key={plant.id}
              style={{
                marginBottom: "2rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Plant image */}
              {plant.image && (
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{
                    width: "120px",
                    height: "125px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div>
                {/* Plant name and description */}
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>

                {/* Last watered and next watering info */}
                <p>
                  <strong>Last Watered:</strong> {formatDate(plant.lastWatered)}
                </p>
                <p>
                  <strong>Next Watering In:</strong> {daysUntilWatering(plant)}
                </p>

                {/* Action buttons */}
                <div style={{ marginTop: "0.5rem" }}>
                  <button onClick={() => removePlant(plant.id)}>Remove</button>{" "}
                  <button onClick={() => markAsWatered(plant.id)}>
                    Mark as Watered
                  </button>{" "}
                  <button onClick={() => toggleTips(plant.id)}>
                    {visibleTips[plant.id] ? "Hide Care Tips" : "Show Care Tips"}
                  </button>
                </div>

                {/* Conditionally show care tips */}
                {visibleTips[plant.id] && plant.careTips && (
                  <div style={{ marginTop: "1rem" }}>
                    <CareTips careTips={plant.careTips} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your garden is empty. Add some plants from the catalog!</p>
      )}

      {/* Placeholder for upcoming features */}
      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        COMING SOON: group plants by room, search, filter, edit last watered
        date, and add your own notes and pictures.
      </p>
    </section>
  );
}

export default MyGardenPage;
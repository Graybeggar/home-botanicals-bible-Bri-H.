import React, { useEffect, useState } from "react";
import { loadMyGarden, saveMyGarden } from "../user-storage/LocalStorage";
import CareTips from "../plant-catalog-page/CareTips";

function MyGardenPage() {
  const [garden, setGarden] = useState([]);
  const [visibleTips, setVisibleTips] = useState({});

  useEffect(() => {
    let loaded = loadMyGarden() || [];
    loaded = loaded.map((plant) => ({
      ...plant,
      wateringIntervalDays: plant.wateringIntervalDays || 7,
    }));
    setGarden(loaded);
  }, []);

  const removePlant = (plantId) => {
    const updatedGarden = garden.filter((plant) => plant.id !== plantId);
    setGarden(updatedGarden);
    saveMyGarden(updatedGarden);
  };

  const toggleTips = (plantId) => {
    setVisibleTips((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  const formatDate = (isoString) => {
    if (!isoString) return "Never";
    const d = new Date(isoString);
    return d.toLocaleDateString();
  };

  const daysUntilWatering = (plant) => {
    if (!plant.lastWatered || !plant.wateringIntervalDays) return "Unknown";

    const lastWateredDate = new Date(plant.lastWatered);
    const nextWaterDate = new Date(lastWateredDate);
    nextWaterDate.setDate(nextWaterDate.getDate() + plant.wateringIntervalDays);

    const now = new Date();
    const diffTime = nextWaterDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Water now!";
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  };

  const markAsWatered = (plantId) => {
    const updatedGarden = garden.map((plant) => {
      if (plant.id === plantId) {
        return { ...plant, lastWatered: new Date().toISOString() };
      }
      return plant;
    });
    setGarden(updatedGarden);
    saveMyGarden(updatedGarden);
  };

  return (
    <section>
      <h2>My Garden</h2>
      <p>This is where you can keep track of your plants and garden progress.</p>

      {garden.length > 0 ? (
        <ul>
  {garden.map((plant) => (
    <li key={plant.id} style={{ marginBottom: "2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      {plant.image && (
        <img
          src={plant.image}
          alt={plant.name}
          style={{ width: "150px", height: "161px", borderRadius: "8px", marginTop: "24px" }}
        />
      )}

      <div>
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>

        <p>
          <strong>Last Watered:</strong> {formatDate(plant.lastWatered)}
        </p>
        <p>
          <strong>Next Watering In:</strong> {daysUntilWatering(plant)}
        </p>

        <button onClick={() => removePlant(plant.id)}>Remove</button>{" "}
        <button onClick={() => markAsWatered(plant.id)}>Mark as Watered</button>{" "}
        <button onClick={() => toggleTips(plant.id)}>
          {visibleTips[plant.id] ? "Hide Care Tips" : "Show Care Tips"}
        </button>

        {visibleTips[plant.id] && plant.careTips && <CareTips careTips={plant.careTips} />}
      </div>
    </li>
  ))}
</ul>
      ) : (
        <p>Your garden is empty. Add some plants from the catalog!</p>
      )}

      <p>COMING SOON: add more features like group plants for each room, search, filter, edit last watered date, and add your own notes and plant pictures.</p>
    </section>
  );
}

export default MyGardenPage;
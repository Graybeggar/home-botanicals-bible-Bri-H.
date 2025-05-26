import React, { useState, useEffect } from "react";
import { loadMyGarden } from "../user-storage/LocalStorage";
import { useNavigate } from "react-router-dom";

function MyGardenPreview() {
  const [garden, setGarden] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedGarden = loadMyGarden() || [];
    setGarden(savedGarden);
  }, []);

  // format date
  const formatDate = (isoString) => {
    if (!isoString) return "Never";
    const d = new Date(isoString);
    return d.toLocaleDateString();
  };

  // calculate watering status (due soon, days left, water now)
  const wateringStatus = (plant) => {
    if (!plant.lastWatered || !plant.wateringIntervalDays) return "Unknown";

    const lastWateredDate = new Date(plant.lastWatered);
    const nextWaterDate = new Date(lastWateredDate);
    nextWaterDate.setDate(nextWaterDate.getDate() + plant.wateringIntervalDays);

    const now = new Date();
    const diffTime = nextWaterDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "💧 Water now!";
    if (diffDays <= 3) return "💧 Due soon";
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} left`;
  };

  return (
    <section>
      <h2>My Garden</h2>
      {garden.length > 0 ? (
        <ul>
          {garden.map((plant) => (
            <li key={plant.id}>
              {plant.name} - Last watered {formatDate(plant.lastWatered)} - {wateringStatus(plant)}
            </li>
          ))}
          <li>
            <button onClick={() => navigate("/plant-catalog")}>
              ➕ Add More Plants
            </button>
          </li>
        </ul>
      ) : (
        <>
          <p>Your garden is empty. Add some plants from the catalog!</p>
          <button onClick={() => navigate("/plant-catalog")}>➕ Add More Plants</button>
        </>
      )}
    </section>
  );
}

export default MyGardenPreview;
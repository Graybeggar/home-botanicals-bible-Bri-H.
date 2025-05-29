// Import React and required hooks
import React, { useState, useEffect } from "react";
// Import function to load saved garden from localStorage
import { loadMyGarden } from "../user-storage/LocalStorage";
// Import hook for programmatic navigation
import { useNavigate } from "react-router-dom";

function MyGardenPreview() {
  // State to hold the user's saved garden
  const [garden, setGarden] = useState([]);
  const navigate = useNavigate();

  // Load garden data from localStorage on component mount
  useEffect(() => {
    const savedGarden = loadMyGarden() || [];
    setGarden(savedGarden);
  }, []);

  // Helper function to format ISO date strings into readable format
  const formatDate = (isoString) => {
    if (!isoString) return "Never";
    const d = new Date(isoString);
    return d.toLocaleDateString();
  };

  // Helper function to determine watering status for each plant
  const wateringStatus = (plant) => {
    // If required data is missing, return "Unknown"
    if (!plant.lastWatered || !plant.wateringIntervalDays) return "Unknown";

    const lastWateredDate = new Date(plant.lastWatered);
    const nextWaterDate = new Date(lastWateredDate);
    nextWaterDate.setDate(
      nextWaterDate.getDate() + plant.wateringIntervalDays
    );

    const now = new Date();
    const diffTime = nextWaterDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days

    if (diffDays < 0) return "💧 Water now!";
    if (diffDays <= 3) return "💧 Due soon";
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} left`;
  };

  return (
    <section>
      <h2>My Garden</h2>

      {/* If garden is not empty, show list of plants */}
      {garden.length > 0 ? (
        <ul>
          {garden.map((plant) => (
            <li key={plant.id}>
              {plant.name} - Last watered {formatDate(plant.lastWatered)} -{" "}
              {wateringStatus(plant)}
            </li>
          ))}
          {/* Button to navigate to plant catalog */}
          <li>
            <button onClick={() => navigate("/plant-catalog")}>
              ➕ Add More Plants
            </button>
          </li>
        </ul>
      ) : (
        // If garden is empty, show message and button
        <>
          <p>Your garden is empty. Add some plants from the catalog!</p>
          <button onClick={() => navigate("/plant-catalog")}>
            ➕ Add More Plants
          </button>
        </>
      )}
    </section>
  );
}

// Export the component so it can be used in other parts of the app
export default MyGardenPreview;
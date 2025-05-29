import React, { useState, useEffect } from "react";
import plants from "../plant-catalog-page/plants";
import { loadMyGarden, saveMyGarden } from "../user-storage/LocalStorage";
import CareTips from "../plant-catalog-page/CareTips";
import PlantCard from "../plant-catalog-page/PlantCard";

/**
 * PlantCatalog Component
 * Allows users to browse, filter, and manage a catalog of plants.
 */
function PlantCatalog() {
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [lightFilter, setLightFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [petSafeOnly, setPetSafeOnly] = useState(false);

  // User's saved garden (localStorage-backed)
  const [garden, setGarden] = useState([]);

  // Controls which plants have visible care tips
  const [visibleTips, setVisibleTips] = useState({});

  // Load garden data from localStorage on mount
  useEffect(() => {
    const savedGarden = loadMyGarden() || [];
    setGarden(savedGarden);
  }, []);

  /**
   * Adds a plant to the garden with initial care tracking data
   */
  const addToGarden = (plant) => {
    const newPlant = {
      ...plant,
      lastWatered: new Date().toISOString(),
      wateringIntervalDays: plant.wateringIntervalDays || 7,
    };

    const updated = garden.filter((p) => p.id !== plant.id).concat(newPlant);
    setGarden(updated);
    saveMyGarden(updated);
  };

  /**
   * Removes a plant from the garden by ID
   */
  const removeFromGarden = (plantId) => {
    const updated = garden.filter((p) => p.id !== plantId);
    setGarden(updated);
    saveMyGarden(updated);
  };

  /**
   * Toggles visibility of care tips for a given plant
   */
  const toggleTips = (plantId) => {
    setVisibleTips((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  /**
   * Filters the plant catalog based on user inputs
   */
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLight = lightFilter ? plant.light === lightFilter : true;
    const matchesSize = sizeFilter ? plant.size === sizeFilter : true;
    const matchesPetSafe = petSafeOnly ? plant.petSafe === true : true;

    return matchesSearch && matchesLight && matchesSize && matchesPetSafe;
  });

  return (
    <section>
      <h2>🌿 Plant Catalog</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter controls */}
      <div className="flex gap-4 mb-6 items-center">
        <select value={lightFilter} onChange={(e) => setLightFilter(e.target.value)}>
          <option value="">All Light</option>
          <option value="Low">Low</option>
          <option value="Bright">Bright</option>
        </select>

        <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
          <option value="">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={petSafeOnly}
            onChange={() => setPetSafeOnly(!petSafeOnly)}
          />
          Pet-Safe Only
        </label>
      </div>

      {/* Filtered plant results */}
      {filteredPlants.length > 0 ? (
        <ul>
          {filteredPlants.map((plant) => (
            <li key={plant.id} style={{ marginBottom: "2rem" }}>
              <PlantCard plant={plant} />

              {/* Add/Remove from garden buttons */}
              {garden.some((p) => p.id === plant.id) ? (
                <button onClick={() => removeFromGarden(plant.id)}>
                  Remove from My Garden
                </button>
              ) : (
                <button onClick={() => addToGarden(plant)}>
                  Add to My Garden
                </button>
              )}

              {/* Toggle care tips */}
              <button onClick={() => toggleTips(plant.id)}>
                {visibleTips[plant.id] ? "Hide Care Tips" : "Show Care Tips"}
              </button>

              {/* Conditionally rendered care tips */}
              {visibleTips[plant.id] && plant.careTips && (
                <CareTips careTips={plant.careTips} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No plants match the selected filters.</p>
      )}
      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        COMING SOON: Add a reset filters button for user convenience.
      </p>
    </section>
  );
}

export default PlantCatalog;
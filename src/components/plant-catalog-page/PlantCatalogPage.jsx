import React, { useState, useEffect } from "react";
import plants from "../plant-catalog-page/plants";
import { loadMyGarden, saveMyGarden } from "../user-storage/LocalStorage";
import CareTips from "../plant-catalog-page/CareTips";
import PlantCard from "../plant-catalog-page/PlantCard"; 

function PlantCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lightFilter, setLightFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [petSafeOnly, setPetSafeOnly] = useState(false);
  const [garden, setGarden] = useState([]);
  const [visibleTips, setVisibleTips] = useState({});

  useEffect(() => {
    const savedGarden = loadMyGarden() || [];
    setGarden(savedGarden);
  }, []);

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

  const removeFromGarden = (plantId) => {
    const updated = garden.filter((p) => p.id !== plantId);
    setGarden(updated);
    saveMyGarden(updated);
  };

  const toggleTips = (plantId) => {
    setVisibleTips((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLight = lightFilter ? plant.light === lightFilter : true;
    const matchesSize = sizeFilter ? plant.size === sizeFilter : true;
    const matchesPetSafe = petSafeOnly ? plant.petSafe === true : true;

    return matchesSearch && matchesLight && matchesSize && matchesPetSafe;
  });

  return (
    <section>
      <h2>Plant Catalog</h2>

      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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

      {filteredPlants.length > 0 ? (
        <ul>
          {filteredPlants.map((plant) => (
            <li key={plant.id} style={{ marginBottom: "2rem" }}>
              <PlantCard plant={plant} />

              {garden.some((p) => p.id === plant.id) ? (
                <button onClick={() => removeFromGarden(plant.id)}>Remove from My Garden</button>
              ) : (
                <button onClick={() => addToGarden(plant)}>Add to My Garden</button>
              )}

              <button onClick={() => toggleTips(plant.id)}>
                {visibleTips[plant.id] ? "Hide Care Tips" : "Show Care Tips"}
              </button>

              {visibleTips[plant.id] && plant.careTips && (
                <CareTips careTips={plant.careTips} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No plants match the selected filters.</p>
      )}
    </section>
  );
}

export default PlantCatalog;
import React from "react";

function PlantCard({ plant }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        maxWidth: "600px",
      }}
    >
      <img
        src={plant.image}
        alt={plant.name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div>
        <h3 style={{ margin: "0 0 0.5rem" }}>{plant.name}</h3>
        <p style={{ margin: 0 }}>{plant.description}</p>
      </div>
    </div>
  );
}

export default PlantCard;
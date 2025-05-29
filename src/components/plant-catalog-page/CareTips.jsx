import React from "react";

export default function CareTips({ careTips }) {
  return (
    <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h4>📚 Care Tips</h4>

      {/* Light Levels: Supports array or single string */}
      <h5>🌓 Light Levels</h5>
      {Array.isArray(careTips.light) ? (
        <ul className="light-level-list">
          {careTips.light.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      ) : (
        <p>{careTips.light}</p>
      )}

      {/* Watering Techniques */}
      <h5>💧 Watering Techniques</h5>
      <p>{careTips.watering}</p>

      {/* Soil Tips (conditionally rendered if present) */}
      {careTips.soil && (
        <>
          <h5>🌱 Soil</h5>
          <p>{careTips.soil}</p>
        </>
      )}

      {/* Pest Control */}
      <h5>🐜 Pest Control</h5>
      <p>{careTips.pests}</p>

      {/* Propagation Methods */}
      <h5>🪴 Propagation</h5>
      <p>{careTips.propagation}</p>
    </div>
  );
}